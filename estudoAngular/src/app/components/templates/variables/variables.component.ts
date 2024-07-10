import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-variables',
  standalone: true,
  imports: [],
  templateUrl: './variables.component.html',
  styleUrl: './variables.component.scss'
})
export class VariablesComponent implements AfterViewInit {
  @ViewChild('name') public nameInput!: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.nameInput.nativeElement.value);
  }

}
