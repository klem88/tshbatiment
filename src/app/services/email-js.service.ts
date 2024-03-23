import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root',
})
export class EmailJsService {
  constructor() {}

  sendEmail(contactForm: {}) {
    emailjs
      .send('service_73xfozo', 'template_89jtjim', contactForm, {
        publicKey: 'JXJau3NSmRoCu9kI0',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        }
      );
  }
}
