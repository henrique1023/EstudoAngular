import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal([
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'imagem',
      title: 'VFull',
      width: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: 'GitHub',
          href: 'https://github.com/henrique1023/EstudoAngular/tree/master/projeto-angular-curso'
        }
      ]
    }
  ])
}
