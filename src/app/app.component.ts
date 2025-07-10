import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, NavbarComponent, FooterComponent],
  template: `
    <app-navbar />
    <app-home />
    <app-footer />
  `,
  styles: [],
})
export class AppComponent {}
