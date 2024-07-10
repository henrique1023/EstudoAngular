import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {
  public isTrue = true;


  public itens: Array<{name: string}> = [];

  public condition: string = 'B';
  public loadingData$: Observable<String[]> = of([
    'Loading1...',
    'Loading2...',
    'Loading3...'
  ]).pipe(delay(2000));

  public trackByFn(index: number){
    return index;
  }

  public addName(name:string){
    return this.itens.push({name});
  }
}
