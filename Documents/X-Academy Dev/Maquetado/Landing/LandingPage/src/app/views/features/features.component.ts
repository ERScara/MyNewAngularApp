import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconCardComponent } from '../../core/icon-card/icon-card.component';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [ CommonModule, IconCardComponent ],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {
  features = [
    {
      icon: 'flash_on',
      title: 'Fast',
      description: 'Fast load times and lag free interaction, my pages load instantly.',
    },
    {
      icon: 'build',
      title: 'Intuitive',
      description: 'Strong preference for easy to use, intuitive UX/UI.',
    },
    {
      icon: 'code',
      title: 'Dynamic',
      description: 'Websites don\'t have to be static, I love making pages come to life.',
    },
  ];
}
