import {AfterViewInit, Component, HostListener, inject, signal} from '@angular/core';
import {NgClass} from '@angular/common';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  imports: [
    NgClass
  ],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class Nav implements AfterViewInit{
  translate: TranslateService = inject(TranslateService);
  activeSection = signal<string>('');
  navHeight = 66;

  navLinks = ['about', 'skills', 'project', 'contact'];

  constructor() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngAfterViewInit(): void {
    const navbar = document.getElementById('navbar');
    this.navHeight = navbar ? navbar.offsetHeight : 66;
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= this.navHeight && rect.bottom > this.navHeight) {
        currentSection = section.id;
      }
    });

    this.activeSection.set(currentSection);
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY + (- this.navHeight);

      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  }

}
