import { Component, inject, signal } from '@angular/core';
import { SectionTitle } from '../../shared/section-title/section-title';
import { Btn } from '../../shared/btn/btn';
import { AbstractControl, FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { TranslateSafeHtmlPipe } from '../../shared/translate-safe-html-pipe';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [
    SectionTitle,
    Btn,
    FormsModule,
    TranslatePipe,
    TranslateSafeHtmlPipe,
    AsyncPipe,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  translate: TranslateService = inject(TranslateService);

  isSending = signal(false);
  message = signal<string>('');

  formData = {
    subject: '',
    email: '',
    message: '',
  };

  onSubmit(e: Event, form: any) {
    e.preventDefault();
    if (form.valid) {
      this.isSending.set(true);
      emailjs
        .sendForm(
          'service_lpzbg65',
          'template_pqhh288',
          e.target as HTMLFormElement,
          'user_5VCPAeKnWXPuFf1EFz7mg',
        )
        .then(() => {
          this.message.set(this.translate.instant('CONTACT.SUCCESS'));
          form.resetForm();
        })
        .catch((err) => {
          console.error(err);
          this.message.set(this.translate.instant('CONTACT.FAILURE'));
        })
        .finally(() => this.isSending.set(false));
    } else {
      this.message.set(this.translate.instant('CONTACT.FILL_CORRECTLY'));
      Object.values(form.controls).forEach((c) =>
        (c as AbstractControl).markAsDirty(),
      );
    }
  }
}
