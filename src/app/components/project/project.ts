import { Component } from '@angular/core';
import { SectionTitle } from '../../shared/section-title/section-title';
import { FormsModule } from '@angular/forms';
import { Btn } from '../../shared/btn/btn';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-project',
  imports: [SectionTitle, FormsModule, Btn, TranslatePipe],
  templateUrl: './project.html',
  styleUrl: './project.scss',
})
export class Project {
  speed = 1.25;
}
