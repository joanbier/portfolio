import {Component, input} from '@angular/core';

@Component({
  selector: 'app-glitch-text',
  imports: [],
  styleUrl: './glitch-text.scss',
  template: `
    <p class="glitch gradientText" [attr.data-text]="glitchText()">{{glitchText()}}</p>
  `
})
export class GlitchText {
  glitchText = input<string>('Test');
}
