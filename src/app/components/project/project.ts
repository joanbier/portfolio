import { Component } from '@angular/core';
import { SectionTitle } from '../../shared/section-title/section-title';
import { FormsModule } from '@angular/forms';
import { Btn } from '../../shared/btn/btn';
import { TranslatePipe } from '@ngx-translate/core';
import { AsyncPipe } from '@angular/common';
import { TranslateSafeHtmlPipe } from '../../shared/translate-safe-html-pipe';

@Component({
  selector: 'app-project',
  imports: [
    SectionTitle,
    FormsModule,
    Btn,
    TranslatePipe,
    AsyncPipe,
    TranslateSafeHtmlPipe,
  ],
  templateUrl: './project.html',
  styleUrl: './project.scss',
})
export class Project {
  speed = 1.25;
}
