import {Component} from '@angular/core';
import {AsyncPipe, NgStyle} from '@angular/common';
import {TranslateSafeHtmlPipe} from '../../shared/translate-safe-html-pipe';

@Component({
  selector: 'app-hero',
  imports: [
    NgStyle,
    TranslateSafeHtmlPipe,
    AsyncPipe
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  orbitsArray = [
    {width: 60, index: 5, animationDuration: 6},
    {width: 70, index: 4, animationDuration: 8},
    {width: 80, index: 3, animationDuration: 10},
    {width: 90, index: 2, animationDuration: 12},
  ];
}
