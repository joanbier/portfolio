import {Component} from '@angular/core';
import {Nav} from './components/nav/nav';
import {Hero} from './components/hero/hero';
import {About} from './components/about/about';
import {Project} from './components/project/project';
import {Skills} from './components/skills/skills';
import {Contact} from './components/contact/contact';
import {Footer} from './components/footer/footer';

@Component({
  selector: 'app-root',
  styles: [],
  imports: [
    Nav,
    Hero,
    About,
    Project,
    Skills,
    Contact,
    Footer
  ],
  template:
    `
    <header id="hero">
      <app-nav/>
      <app-hero/>
    </header>
    <main>
      <section id="about"><app-about/></section>
      <section id="skills"><app-skills/></section>
      <section id="projects"><app-project/></section>
      <section id="contact"><app-contact/></section>
    </main>
    <footer><app-footer/></footer>
  `
})
export class App {}
