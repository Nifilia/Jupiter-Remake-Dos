import { Component, inject, signal } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ContentService } from './services/content.service';
import { catchError } from 'rxjs';
import { Content, TimelineContent } from './model/content.type';
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
