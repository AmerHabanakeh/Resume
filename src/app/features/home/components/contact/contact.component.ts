import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EmailService } from '../../../../core/services/email.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { portfolioData } from '../../../../core/data/portfolio-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class ContactComponent {
  isLoading = false; // Add this property
  contactInfo = portfolioData.contactInfo;
  emailService = inject(EmailService);
  formBuilder = inject(FormBuilder);
  contactUsForm = this.formBuilder.group({
    name:['',Validators.required],
    message:['',Validators.required],
    title:[''],
    email:['']
  });
    onSubmit() {
    if (this.contactUsForm.valid) {
      this.isLoading = true;
      // Handle form submission
      this.emailService.sendEmail(this.contactUsForm.value).then(()=>{
          alert('Your message has been sent successfully!');
        this.contactUsForm.reset();
      }).catch((error)=>{
          const errorMsg = 'Failed to send message. Please try again later.';
          alert(`Error: ${errorMsg}`);
      }).finally(()=>{
        this.isLoading = false;
      });
    } else {
      // Mark all fields as touched to show validation errors
      this.contactUsForm.markAllAsTouched();
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactUsForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }
}
