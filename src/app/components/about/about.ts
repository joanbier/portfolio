import {Component} from '@angular/core';
import {MySlider} from '../../shared/my-slider/my-slider';
import {SectionTitle} from '../../shared/section-title/section-title';


@Component({
  selector: 'app-about',
  imports: [
    MySlider,
    SectionTitle,
  ],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {



}
