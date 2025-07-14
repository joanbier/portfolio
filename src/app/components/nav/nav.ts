import {AfterViewInit, Component, HostListener, signal} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-nav',
  imports: [
    NgClass
  ],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class Nav implements AfterViewInit{
  activeSection = signal<string>('');
  navHeight = 66;

  navLinks = ['about', 'skills', 'project', 'contact'];

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
