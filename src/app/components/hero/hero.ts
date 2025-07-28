import { Component } from '@angular/core';
import { AsyncPipe, NgStyle } from '@angular/common';
import { TranslateSafeHtmlPipe } from '../../shared/translate-safe-html-pipe';
import { GlitchText } from '../../shared/glitch-text/glitch-text';
import { TranslatePipe } from '@ngx-translate/core';
import { SocialItems } from '../../shared/social-items/social-items';

@Component({
  selector: 'app-hero',
  imports: [
    NgStyle,
    TranslateSafeHtmlPipe,
    AsyncPipe,
    GlitchText,
    TranslatePipe,
    SocialItems,
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  orbitsArray = [
    { width: 60, index: 5, animationDuration: 6 },
    { width: 70, index: 4, animationDuration: 8 },
    { width: 80, index: 3, animationDuration: 10 },
    { width: 90, index: 2, animationDuration: 12 },
  ];

  scrollDown() {
    const navHeight = 69;
    const element = document.getElementById('about');
    if (element) {
      const y =
        element.getBoundingClientRect().top + window.scrollY + (-navHeight + 1);

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  }
}
