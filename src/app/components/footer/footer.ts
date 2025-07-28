import { Component } from '@angular/core';
import {SocialItems} from '../../shared/social-items/social-items';

@Component({
  selector: 'app-footer',
  imports: [
    SocialItems
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  year = new Date().getFullYear();

}
