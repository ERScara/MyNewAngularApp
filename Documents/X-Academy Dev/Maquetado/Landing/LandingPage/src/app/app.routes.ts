import { Routes } from '@angular/router';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { FeaturesComponent } from './views/features/features.component';
import { ServiceComponent } from './views/service/service.component';
import { PricingComponent } from './views/pricing/pricing.component';
import { ContactComponent } from './views/contact/contact.component';

export const routes: Routes = [
    { path: 'landing', component: LandingPageComponent }, { path: 'features', component: FeaturesComponent }, { path: 'service', component: ServiceComponent }, { path: 'pricing', component: PricingComponent }, { path: 'contact', component: ContactComponent }, { path: '', redirectTo: 'landing', pathMatch: 'full' }, /*{ path: '**', component: LandingPageComponent }*/
];

