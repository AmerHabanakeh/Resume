import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private serviceID = 'service_5oop32x';
  private templateID = 'template_csy2it6';
  private publicKey = 'VIs_czPuzxr-5Lw-A';

  constructor() {
    emailjs.init(this.publicKey);
  }

  sendEmail(params: any):Promise<EmailJSResponseStatus> {
    return emailjs.send(this.serviceID, this.templateID, params);
  }
}
