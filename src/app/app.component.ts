import { Component, signal } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, HeaderComponent],
  template: `
    <app-header [coverPhoto]="headerImage()" />
    <app-home />
  `,
  styles: [],
})
export class AppComponent {
  headerImage = signal(
    'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
  );
}
