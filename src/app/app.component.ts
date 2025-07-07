import { Component, inject, signal } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentService } from './services/content.service';
import { catchError } from 'rxjs';
import { Content } from './model/content.type';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, HeaderComponent],
  template: `
    <app-header [coverPhoto]="headerImage()" />
    <app-home />
  `,
  styles: [],
  providers: [ContentService],
})
export class AppComponent {
  headerImage = signal(
    'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
  );

  content = signal<Content | null>(null);

  contentService = inject(ContentService);

  ngOnInit(): void {
    this.contentService
      .getContentFromApi()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )

      .subscribe((result) => {
        console.log(result.data.category);
      });
  }
}
