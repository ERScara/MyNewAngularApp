import { Component } from '@angular/core';
import { ContactForm } from '../../core/models/contact-form.model';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { FeatureService } from '../../core/services/feature.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  providers: [FeatureService],
})
export class ContactComponent {
  selectedFeature: any;
  form!: FormGroup;
  errors?: string;
  name?: string;
  email?: string;
  pattern?: string;
  landingType?: string;
  feature?: (number | null)

  formModel = {
    subject: '',
    email: '',
    message: ''
  } as ContactForm;

constructor(private featureService: FeatureService) { }
count = new FormControl(0)

get emailControl() {
  const email = this.email;
  const name = this.name;
  const pattern = this.pattern;
    if (name !== null && name !== undefined) {
      return this.form.get('name') as FormControl;
    } else if (pattern !== null && pattern !== undefined) {
      return this.form.get('pattern') as FormControl;
    } else if (email !== null && email !== undefined) {
      return this.form.get('email') as FormControl;
    } else {
      throw new FormControl('', [Validators.required, Validators.email]);
    }
}
  
onSubmit(contactForm: any) {
  this.featureService.sendEmail(contactForm).subscribe();
  console.log(contactForm);
}
ngOnInit() {
  this.form = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
}
resolveComponentResources(): string | null {
  if (this.landingType === 'presentation') {
    return 'presentation';
  } else {
    return 'landing-page';
  }
}
   
onEmailSubmit() {
  const email = this.emailControl.value;
  console.log(email);
  }
}
     