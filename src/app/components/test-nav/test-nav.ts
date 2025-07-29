import { AfterViewInit, Component, HostListener, signal } from '@angular/core';
import { LangSwitch } from '../nav/components/lang-switch/lang-switch';
import { TranslatePipe } from '@ngx-translate/core';
import { NgClass, UpperCasePipe } from '@angular/common';
import { Btn } from '../../shared/btn/btn';

@Component({
  selector: 'app-test-nav',
  imports: [LangSwitch, TranslatePipe, UpperCasePipe, Btn, NgClass],
  templateUrl: './test-nav.html',
  styleUrl: './test-nav.scss',
})
export class TestNav implements AfterViewInit {
  activeSection = signal<string>('');
  isMobileMenuOpen = signal<boolean>(false);
  isMobileMenuClosing = signal<boolean>(false);
  isMobileToggling = signal<boolean>(false);

  navHeight = 69;

  navLinks = ['about', 'skills', 'projects', 'contact'];

  ngAfterViewInit(): void {
    const navbar = document.getElementById('navbar');
    this.navHeight = navbar ? navbar.offsetHeight : 66;
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= this.navHeight && rect.bottom > this.navHeight) {
        currentSection = section.id;
      }
    });

    this.activeSection.set(currentSection);
  }

  toggleMobileMenu() {
    if (this.isMobileToggling()) return;
    this.isMobileToggling.set(true);
    if (this.isMobileMenuOpen()) {
      this.isMobileMenuClosing.set(true);
      setTimeout(() => {
        this.isMobileMenuOpen.set(false);
        this.isMobileMenuClosing.set(false);
        this.isMobileToggling.set(false);
      }, 400);
    } else {
      this.isMobileToggling.set(false);
      this.isMobileMenuOpen.set(true);
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const y =
        element.getBoundingClientRect().top + window.scrollY + -this.navHeight;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  }

  toggleMenuAndScroll(sectionId: string) {
    this.toggleMobileMenu();
    this.scrollToSection(sectionId);
  }
}
