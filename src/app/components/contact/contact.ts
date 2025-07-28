import { Component, signal } from '@angular/core';
import { SectionTitle } from '../../shared/section-title/section-title';
import { Btn } from '../../shared/btn/btn';
import { AbstractControl, FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [SectionTitle, Btn, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
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
          this.message.set('Message has been sent!');
          form.resetForm();
        })
        .catch((err) => {
          console.error(err);
          this.message.set('Something went wrong!');
        })
        .finally(() => this.isSending.set(false));
    } else {
      this.message.set('Fill up the form correctly');
      Object.values(form.controls).forEach((c) =>
        (c as AbstractControl).markAsDirty(),
      );
    }
  }
}
