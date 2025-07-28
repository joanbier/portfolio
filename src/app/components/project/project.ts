import { Component } from '@angular/core';
import {SectionTitle} from "../../shared/section-title/section-title";
import {FormsModule} from '@angular/forms';
import {Btn} from '../../shared/btn/btn';

@Component({
  selector: 'app-project',
  imports: [
    SectionTitle,
    FormsModule,
    Btn,
  ],
  templateUrl: './project.html',
  styleUrl: './project.scss'
})
export class Project {
  speed = 1.25;
}
