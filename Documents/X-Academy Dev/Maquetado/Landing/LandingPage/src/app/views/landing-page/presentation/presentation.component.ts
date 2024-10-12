import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule, Validators, NgModel } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FeatureService } from '../../../core/services/feature.service';
import { ContactForm } from '../../../core/models/contact-form.model';
import { ContactComponent } from '../../contact/contact.component';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule, FormsModule, ContactComponent],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss',
  providers: [FeatureService, NgModel, NgModule],
})
export class PresentationComponent {
  selectedFeature: any;
  title = 'Presentation';
  form!: FormGroup;
  errors?: string;
  name?: string;
  email?: string;
  pattern?: string;
  landingType?: string;
  feature?: (number | null)
  formGroup = new FormGroup({ email: new FormControl('', { updateOn: 'blur' }) });
  
  formModel = {
    email: '',
  } as ContactForm;

constructor(private featureService: FeatureService) { }
  count = new FormControl(0)

get emailControl() {
    const email = this.email;
    if (email !== null && email !== undefined) {
      return this.form.get('email') as FormControl;
    } else {
      throw new FormControl('', [Validators.required, Validators.email]);
  }
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

  updateEmail() {
    const email = this.emailControl.value;
    console.log(email);
  }

  onSubmit(contactForm: any) {
    this.featureService.sendEmail(contactForm).subscribe();
    console.log(contactForm);
  }
}

