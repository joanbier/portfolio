import {Component, CUSTOM_ELEMENTS_SCHEMA, signal} from '@angular/core';

interface Slide {
  id: number;
  title: string;
}


@Component({
  selector: 'app-my-slider',
  imports: [],
  templateUrl: './my-slider.html',
  styleUrl: './my-slider.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MySlider {
  mySlides = [
    {id: 1, title: 'cyk'},
    {id: 2, title: 'cyk 2'},
    {id: 3, title: 'cyk 3'},
    {id: 4, title: 'cyk 4'},
  ]
  slides = signal<Slide[]>(this.mySlides);
}
