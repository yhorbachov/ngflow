import { ChangeDetectionStrategy, Component, InjectionToken, Type, inject } from '@angular/core';
import { BACKGROUND_COMPONENT } from '../../tokens';

type BackgroundDotsConfig = {
  type: 'dots';
};

type BackgroundLinesConfig = {
  type: 'lines';
};

type BackgroundCrossConfig = {
  type: 'cross';
};

type CustomConfig = {
  component: Type<unknown>;
};

export type BackgroundConfig = BackgroundDotsConfig | BackgroundLinesConfig | BackgroundCrossConfig;

const BG_CONFIG = new InjectionToken<BackgroundConfig>('Background config');

const defaultConfig: BackgroundConfig = {
  type: 'dots',
};

export const provideBackground = (config: BackgroundConfig | CustomConfig = defaultConfig) => {
  // If user passed a custom component, we don't need to provide any config
  if ('component' in config) {
    return [
      {
        provide: BACKGROUND_COMPONENT,
        useValue: config.component,
      },
    ];
  }

  // Otherwise, we need to provide a config and default component
  return [
    {
      provide: BACKGROUND_COMPONENT,
      useValue: BackgroundComponent,
    },
    {
      provide: BG_CONFIG,
      useValue: config,
    },
  ];
};

let uniqueId = 0;

@Component({
  standalone: true,
  selector: 'flow-background',
  template: `
    <svg>
      <pattern
        [attr.id]="id"
        patternUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="20"
        patternTransform="translate(-0.5,-0.5)"
      >
        @if (config.type === 'dots') {
        <circle cx="0.5" cy="0.5" r="0.5" fill="#91919a" />
        } @if(config.type ==='lines') {
        <path stroke="#eee" stroke-width="1" d="M10 0 V20 M0 10 H20"></path>
        } @if(config.type ==='cross') {
        <path stroke-width="1" d="M3 0 V6 M0 3 H6" stroke="#e2e2e2"></path>
        }
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" [attr.fill]="'url(#' + id + ')'" />
    </svg>
  `,
  styleUrls: ['./background.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundComponent {
  readonly id = `bg_${uniqueId++}`;

  config = inject(BG_CONFIG);
}
