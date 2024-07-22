import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new/new.component';
import { TextInterpolationComponent } from './components/templates/text-interpolation/text-interpolation.component';
import { TemplateControlFlowComponent } from './components/templates/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewsComponent } from './components/templates/template-deferrable-views/template-deferrable-views.component';
import { SignalsComponent } from './components/signals/signals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NewComponent, 
    TextInterpolationComponent, 
    TemplateControlFlowComponent,
    TemplateDeferrableViewsComponent,
    SignalsComponent],
  template: `
  <router-outlet />

  Forma antiga de chamar
  <!-- <app-new-component></app-new-component> -->
  <!-- <app-text-interpolation></app-text-interpolation> -->
   <!-- <app-template-control-flow></app-template-control-flow> -->
    <app-template-deferrable-views></app-template-deferrable-views>
    <app-signals></app-signals>
  `,
})
export class AppComponent {
  title = 'estudoAngular';
}
