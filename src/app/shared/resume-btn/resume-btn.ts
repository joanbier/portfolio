import { Component } from '@angular/core';
import { Btn } from '../btn/btn';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-resume-btn',
  imports: [Btn, TranslatePipe],
  templateUrl: './resume-btn.html',
  styleUrl: './resume-btn.scss',
})
export class ResumeBtn {}
