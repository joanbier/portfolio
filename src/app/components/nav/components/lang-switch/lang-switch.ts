import { Component, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-lang-switch',
  imports: [NgClass],
  templateUrl: './lang-switch.html',
  styleUrl: './lang-switch.scss',
})
export class LangSwitch {
  translate: TranslateService = inject(TranslateService);

  activeLang = signal<string>('en');

  constructor() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  switchLang(string: 'pl' | 'en'): void {
    const currentLang = this.translate.currentLang;
    if (currentLang === string) return;
    this.translate.use(string);
    this.activeLang.set(string);
  }
}
