import { Component } from '@angular/core';
import {SectionTitle} from "../../shared/section-title/section-title";
import {SkillCard} from '../../shared/skill-card/skill-card';

@Component({
  selector: 'app-skills',
  imports: [
    SectionTitle,
    SkillCard
  ],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {

  skills = {
    frontend: [
      {name: 'HTML', img: 'html.svg'},
      {name: 'CSS', img: 'css.svg'},
      {name: 'JavaScript', img: 'javascript.svg'},
      {name: 'TypeScript', img: 'typescript.svg'},
      {name: 'Angular', img: 'angular.webp'},
      {name: 'RxJS', img: 'rxjs.svg'},
      {name: 'PrimeNG', img: 'primeng.webp'},
      {name: 'Tailwind CSS', img: 'tailwind-css.svg'},
      {name: 'Bootstrap', img: 'bootstrap.svg'},
    ],
    backend: [
      {name: 'C#', img: 'c-sharp.svg'},
      {name: '.NET Core', img: 'NET-core.svg'},
      {name: 'NuGet', img: 'NuGet.svg'},
      {name: 'MySQL', img: 'mysql.webp'},
      {name: 'DBeaver', img: 'DBeaver.svg'},
      {name: 'Swagger', img: 'Swagger.svg'},
      {name: 'Insomnia', img: 'Insomnia.svg'},
    ],
    tools: [
      {name: 'Git', img: 'Git.svg'},
      {name: 'Figma', img: 'Figma.svg'},
      {name: 'Jet Brains', img: 'JetBrains.svg'},
      {name: 'Docker', img: 'Docker.svg'},
      {name: 'NPM', img: 'NPM.svg'},
      {name: 'GitLab', img: 'GitLab.svg'},
      {name: 'Netlify', img: 'netlify.png'},
      {name: 'Linux', img: 'Linux.svg'},
    ],
  }

}
