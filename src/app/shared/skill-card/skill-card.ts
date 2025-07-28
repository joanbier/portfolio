import {Component, input} from '@angular/core';

export interface SkillItem {
  name: string;
  img: string;
}
@Component({
  selector: 'app-skill-card',
  imports: [],
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.scss'
})
export class SkillCard {
title = input.required<string>();
items = input.required<SkillItem[]>();
}
