import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FeatureService } from '../../core/services/feature.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { FormsModule, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [ CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
  providers: [FeatureService],
})

export class PricingComponent {
  FormGroup = new FormGroup({});
  selectedFeature: any;
  title = 'Pricing';
  provider?: string
  message?: string
  email?: string
  subject?: string
  price?: number
  features: Array<any> = [
    { id: 1, title: 'Free', description: 'For small projects', price: 0 },
    { id: 2, title: 'Extra', description: 'For medium projects', price: 50 },
    { id: 3, title: 'Premium', description: 'For large projects', price: 1500 }
  ] 

onFeatureSelected(feature: any) {
  this.selectedFeature = feature;
}
emailForm = new FormGroup({
  email: new FormControl('', { updateOn: 'blur' }) })
  landingType?: string;
  feature?: (number | null)
  count = new FormControl(0)

emailControl = new FormControl('', { updateOn: 'blur' })


onEmailSubmit() {
    const email = this.emailControl.value;
    console.log(email);
}
  
constructor(private featureService: FeatureService, private httpClient: HttpClient) {
    this.featureService = new FeatureService(httpClient);
}
OnInit() {
   this.featureService.getFeatures().subscribe();
  }
}
