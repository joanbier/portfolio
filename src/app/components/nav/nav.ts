import {AfterViewInit, Component, HostListener, inject, signal} from '@angular/core';
import {NgClass, UpperCasePipe} from '@angular/common';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {Btn} from '../../shared/btn/btn';

@Component({
  selector: 'app-nav',
  imports: [
    NgClass,
    TranslatePipe,
    UpperCasePipe,
    Btn
  ],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class Nav implements AfterViewInit{
  translate: TranslateService = inject(TranslateService);
  activeSection = signal<string>('');
  navHeight = 66;

  navLinks = ['about', 'skills', 'projects', 'contact'];

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

  switchLang(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedLang = selectElement.value;
    this.translate.use(selectedLang);
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
