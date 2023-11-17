import { Component } from '@angular/core';
import { FlowRootComponent, BackgroundComponent, provideBackground } from 'ngflow';

@Component({
  standalone: true,
  imports: [FlowRootComponent, BackgroundComponent],
  selector: 'sandbox-root',
  template: `<flow-root> </flow-root> `,
  styleUrls: ['./app.component.css'],
  providers: [provideBackground({ type: 'dots' })],
})
export class AppComponent {
  title = 'sandbox';
}
