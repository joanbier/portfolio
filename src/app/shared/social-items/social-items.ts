import { Component } from '@angular/core';

@Component({
  selector: 'app-social-items',
  imports: [],
  templateUrl: './social-items.html',
  styleUrl: './social-items.scss'
})
export class SocialItems {
  socialArray = [
    {
      name: 'github',
      link: '#',
    },
    {
      name: 'linkedin',
      link: '#',
    },
    {
      name: 'instagram',
      link: '#',
    },
    {
      name: 'facebook',
      link: '#',
    },
  ];
}
