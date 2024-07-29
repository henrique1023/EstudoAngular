import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperience = signal([
    {
      summary: {
        strong: "Desenvolvedor Java Pleno",
        p: "One | Março 2024 - Atualmente"
      },
      text: "<p>Desenvolvedor Java focado em react e criação de Apis Spring</p>"
    }
  ]);
}
