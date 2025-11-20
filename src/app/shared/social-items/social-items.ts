import { Component } from '@angular/core';

@Component({
  selector: 'app-social-items',
  imports: [],
  templateUrl: './social-items.html',
  styleUrl: './social-items.scss',
})
export class SocialItems {
  socialArray = [
    {
      name: 'github',
      link: 'https://github.com/joanbier',
    },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/joanna-biernat/',
    },
    {
      name: 'instagram',
      link: 'https://www.instagram.com/beer_nut95/',
    },
    // {
    //   name: 'facebook',
    //   link: 'https://www.facebook.com/joanna.biernat.95',
    // },
  ];
}
