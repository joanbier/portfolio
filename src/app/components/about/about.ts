import {Component, OnInit} from '@angular/core';
import {MySlider, Slide} from '../../shared/my-slider/my-slider';
import {SectionTitle} from '../../shared/section-title/section-title';
import {NgStyle} from '@angular/common';
import {Btn} from "../../shared/btn/btn";
import {TranslatePipe} from "@ngx-translate/core";


@Component({
  selector: 'app-about',
    imports: [
        MySlider,
        SectionTitle,
        NgStyle,
        Btn,
        TranslatePipe,
    ],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements OnInit {
  myHobbies: Slide[] = [];

  originalHobbies: Slide[] = [
  {id: 1, title: 'Code & Coffee', img: 'coding.webp'},
  {id: 2, title: 'Travel & Nature', img: 'forest.webp'},
  {id: 3, title: 'Play & Pixels',  img: 'play.webp'},
  {id: 4, title: 'Cook & Bake', img: 'cooking.webp'},
]

  skills = [
    {
      title: "Front-end",
      description: "My main focus. I care about best UX/UI, responsive & animated layouts with performance in mind",
      icon: 'desktop.svg'
    },
    {
      title: "Back-end",
      description: "I build solid APIs, scalable logic and clean architecture to support fast, secure and maintainable apps",
      icon: 'server.svg'
    },
    {
      title: "Best Practice",
      description: "Clean code, type-safety, unit tests, following style guides, naming conventions & pattern principles",
      icon: 'badge.svg'
    },
    {
      title: "Problem Solver",
      description: "I treat bugs as challenges - the best way to learn, understand, and master a system",
      icon: 'bug.svg'
    },
    {
      title: "Team Buddy",
      description: "Github team workflow using feature branches & code reviews. I believe that great code is built together",
      icon: 'group.svg'
    },
    {
      title: "Learning & Sharing",
      description: "I'm constantly learning, writing docs, improving workflows and sharing what I know with the others",
      icon: 'share.svg'
    },
  ]

  ngOnInit() {
    //this trick  (multiplying items) fixes the bug with jumping scroll to swiper after one sequence
    const repeatCount = 8;

    this.myHobbies = Array(repeatCount)
      .fill(0)
      .flatMap((_, i) =>
        this.originalHobbies.map((s, idx) => ({
          ...s,
          id: idx + 1 + i * this.originalHobbies.length
        }))
      );
  }

}
