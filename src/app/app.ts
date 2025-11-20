import { Component, inject } from '@angular/core';
import { Nav } from './components/nav/nav';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Project } from './components/project/project';
import { Skills } from './components/skills/skills';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  styles: [],
  imports: [Nav, Hero, About, Project, Skills, Contact, Footer],
  template: `
    <header id="hero">
      <app-nav />
      <app-hero />
    </header>
    <main>
      <section id="about"><app-about /></section>
      <section id="skills"><app-skills /></section>
      <section id="project"><app-project /></section>
      <section id="contact"><app-contact /></section>
    </main>
    <footer><app-footer /></footer>
  `,
})
export class App {
  translate: TranslateService = inject(TranslateService);

  constructor() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
