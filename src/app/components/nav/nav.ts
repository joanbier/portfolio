import {
  AfterViewInit,
  Component,
  HostListener,
  inject,
  signal,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { NgClass, UpperCasePipe } from '@angular/common';
import {
  LangChangeEvent,
  TranslatePipe,
  TranslateService,
} from '@ngx-translate/core';
import { Btn } from '../../shared/btn/btn';
import { LangSwitch } from './components/lang-switch/lang-switch';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  imports: [NgClass, TranslatePipe, UpperCasePipe, Btn, LangSwitch],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav implements AfterViewInit, OnDestroy {
  translate: TranslateService = inject(TranslateService);
  cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

  activeSection = signal<string>('');
  isMobileMenuOpen = signal<boolean>(false);
  isMobileMenuClosing = signal<boolean>(false);
  isMobileToggling = signal<boolean>(false);

  navHeight = 69;

  navLinks = ['about', 'skills', 'projects', 'contact'];

  langChangeSub: Subscription;

  constructor() {
    this.langChangeSub = this.translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        // Wymuszamy detekcję zmian, aby Angular przerysował template
        this.cdr.detectChanges();
      },
    );
  }

  ngOnDestroy() {
    this.langChangeSub.unsubscribe();
  }

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
