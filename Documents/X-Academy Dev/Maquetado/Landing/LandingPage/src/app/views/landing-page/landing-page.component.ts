import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { PresentationComponent } from "./presentation/presentation.component";
import { IconCardComponent } from '../../core/icon-card/icon-card.component';
import { CommonModule } from '@angular/common';
import { Feature } from '../../core/models/feature.model';
import { encapsulateStyle } from '@angular/compiler';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [PresentationComponent, IconCardComponent, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class LandingPageComponent {
  features: Feature[] = [
    {
      icon: "edit",
      title: "Easy to Use",
      description: "Editing and customizing Essential Landing is easy and fast."
    },
    {
      icon:"stacks",
      title: "100% Responsive",
      description: "Editing and customizing Essential Landing is easy and fast."
    },
    {
      icon: "devices",
      title: "50+ New Pages",
      description: "Editing and customizing Essential Landing is easy and fast."
    }
  ]
  disableBtn = false;
  counter = 0;
  SumOne() {
    this.counter++;
    if (this.counter > 0) {
      this.disableBtn = true;
    }
  }
}
