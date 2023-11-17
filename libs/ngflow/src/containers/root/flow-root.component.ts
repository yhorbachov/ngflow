import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BACKGROUND_COMPONENT } from '../../tokens';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'flow-root',
  templateUrl: './flow-root.component.html',
  styleUrls: ['./flow-root.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowRootComponent {
  bgComponent = inject(BACKGROUND_COMPONENT, { optional: true });
}
