import {Component, input} from '@angular/core';
import {NgClass} from '@angular/common';

export type BtnModificator = 'fancy' | 'disabled';

@Component({
  selector: 'app-btn',
  imports: [
    NgClass
  ],
  styleUrl: './btn.scss',
  template: `
    <button [ngClass]="{'btn--fancy' : type() === 'fancy'}" class="btn flex">
      <span class="font-medium"><ng-content></ng-content></span>
      @if (icon()?.length) {
        <span class="inline-block ml-2"><img [src]="'assets/icons/' + icon() + '.svg'" alt=""></span>
      }
    </button>
  `
})
export class Btn {
icon = input<string>();
type = input<BtnModificator>();
}
