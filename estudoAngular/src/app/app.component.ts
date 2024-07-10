import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new/new.component';
import { TextInterpolationComponent } from './components/templates/text-interpolation/text-interpolation.component';
import { TemplateControlFlowComponent } from './components/templates/template-control-flow/template-control-flow.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponent, TextInterpolationComponent, TemplateControlFlowComponent],
  template: `
  <router-outlet />

  Forma antiga de chamar<app-new-component></app-new-component>
  <!-- <app-text-interpolation></app-text-interpolation> -->
   <app-template-control-flow></app-template-control-flow>
  `,
})
export class AppComponent {
  title = 'estudoAngular';
}
