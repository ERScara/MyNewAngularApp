import { Component } from '@angular/core';
import { OutlineButtonComponent } from '../outline-button/outline-button.component';
import { HeaderMenuComponent } from "./header-menu/header-menu.component";
import { MenuItem } from '../models/menu-item.model';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    OutlineButtonComponent,
    HeaderComponent,
    HeaderMenuComponent,
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuItems: Array<MenuItem> = [
    { text: 'Free Landing Pages', route: '/landing' },
    { text: 'Features', route: '/features' },
    { text: 'Service', route: '/service' },
    { text: 'Pricing', route: '/pricing' },
    { text: 'Contact', route: '/contact' }
  ];
}
