import { Component, signal } from '@angular/core';
import { LangSwitch } from '../nav/components/lang-switch/lang-switch';
import { TranslatePipe } from '@ngx-translate/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-test-nav',
  imports: [LangSwitch, TranslatePipe, UpperCasePipe],
  templateUrl: './test-nav.html',
  styleUrl: './test-nav.scss',
})
export class TestNav {
  isMobileMenuOpen = signal<boolean>(false);

  navLinks = ['about', 'skills', 'projects', 'contact'];

  toggleMobileMenu() {
    this.isMobileMenuOpen.set(!this.isMobileMenuOpen());
  }
}
