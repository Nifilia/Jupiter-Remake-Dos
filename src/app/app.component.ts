import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, NavbarComponent],
  template: `
    <app-navbar />
    <app-home />
  `,
  styles: [],
})
export class AppComponent {}
