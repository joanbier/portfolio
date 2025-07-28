import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

type titleMode = 'center' | 'start' | 'end';

@Component({
  selector: 'app-section-title',
  imports: [NgClass],
  templateUrl: './section-title.html',
  styleUrl: './section-title.scss',
})
export class SectionTitle {
  mode = input<titleMode>('center');
}
