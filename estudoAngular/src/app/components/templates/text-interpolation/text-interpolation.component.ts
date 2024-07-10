import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VariablesComponent } from '../variables/variables.component';

@Component({
  selector: 'app-text-interpolation',
  standalone: true,
  imports: [CommonModule, FormsModule, VariablesComponent],
  templateUrl: './text-interpolation.component.html',
  styleUrl: './text-interpolation.component.scss'
})
export class TextInterpolationComponent {
  public title = 'Text Interpolation';
  public name = 'John Doe';
  public age = 30;
  public isDisabled = true;

  public sum () {
    return this.age++;
  }
}
