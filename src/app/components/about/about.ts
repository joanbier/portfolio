import { Component, OnInit } from '@angular/core';
import { MySlider, Slide } from '../../shared/my-slider/my-slider';
import { SectionTitle } from '../../shared/section-title/section-title';
import { AsyncPipe, NgStyle } from '@angular/common';
import { Btn } from '../../shared/btn/btn';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslateSafeHtmlPipe } from '../../shared/translate-safe-html-pipe';

@Component({
  selector: 'app-about',
  imports: [
    MySlider,
    SectionTitle,
    NgStyle,
    Btn,
    TranslatePipe,
    TranslateSafeHtmlPipe,
    AsyncPipe,
  ],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements OnInit {
  myHobbies: Slide[] = [];

  originalHobbies: Slide[] = [
    { id: 1, title: 'Code & Coffee', img: 'coding.webp' },
    { id: 2, title: 'Travel & Nature', img: 'forest.webp' },
    { id: 3, title: 'Play & Pixels', img: 'play.webp' },
    { id: 4, title: 'Cook & Bake', img: 'cooking.webp' },
  ];

  skills = [
    {
      title: 'Front-end',
      translationKey: 'ABOUT.SKILL_1',
      icon: 'desktop.svg',
    },
    {
      title: 'Back-end',
      translationKey: 'ABOUT.SKILL_2',
      icon: 'server.svg',
    },
    {
      title: 'Best Practice',
      translationKey: 'ABOUT.SKILL_3',
      icon: 'badge.svg',
    },
    {
      title: 'Problem Solver',
      translationKey: 'ABOUT.SKILL_4',
      icon: 'bug.svg',
    },
    {
      title: 'Team Buddy',
      translationKey: 'ABOUT.SKILL_5',
      icon: 'group.svg',
    },
    {
      title: 'Learning & Sharing',
      translationKey: 'ABOUT.SKILL_6',
      icon: 'share.svg',
    },
  ];

  ngOnInit() {
    //this trick  (multiplying items) fixes the bug with jumping scroll to swiper after one sequence
    const repeatCount = 8;

    this.myHobbies = Array(repeatCount)
      .fill(0)
      .flatMap((_, i) =>
        this.originalHobbies.map((s, idx) => ({
          ...s,
          id: idx + 1 + i * this.originalHobbies.length,
        })),
      );
  }
}
