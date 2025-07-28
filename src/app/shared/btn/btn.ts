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
    <button [disabled]="isLoading()" [ngClass]="{'btn--fancy' : type() === 'fancy', 'w-full': widthFull()}" class="btn">
      <span class="font-medium"><ng-content></ng-content></span>
      @if (isLoading()) {
        <span class="animate-spin inline-block ml-2"><img width="24" height="24" src="assets/icons/spinner.svg" alt="spinner"></span>
      } @else if (icon()?.length) {
        <span class="inline-block ml-2"><img [src]="'assets/icons/' + icon() + '.svg'" alt=""></span>
      }
    </button>
  `
})
export class Btn {
icon = input<string>();
widthFull = input<boolean>(false);
isLoading = input<boolean>(false);
type = input<BtnModificator>();
}
