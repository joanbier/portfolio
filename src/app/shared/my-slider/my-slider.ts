import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  effect,
  input,
} from '@angular/core';
import { NgStyle } from '@angular/common';

export interface Slide {
  id: number;
  title: string;
  img: string;
}

@Component({
  selector: 'app-my-slider',
  imports: [NgStyle],
  templateUrl: './my-slider.html',
  styleUrl: './my-slider.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MySlider {
  items = input<Slide[]>();

  slides: Slide[] = [];

  constructor() {
    effect(() => {
      this.slides = this.items() ?? [];
    });
  }
}
