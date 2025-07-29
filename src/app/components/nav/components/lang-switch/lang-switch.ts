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

  activeLang = signal<string>('');

  constructor() {
    const currentLang = this.translate.currentLang;
    this.activeLang.set(currentLang);
  }

  switchLang(string: 'pl' | 'en'): void {
    const currentLang = this.translate.currentLang;
    if (currentLang === string) return;
    this.translate.use(string);
    this.activeLang.set(string);
  }
}
