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
    <app-home [timelines]="timelineList()" />
  `,
  styles: [],
  providers: [ContentService],
})
export class AppComponent {
  timelineList = signal<Array<TimelineContent> | null>(null);
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
        this.content.set(result.data.category);

        result.data.category.frontPage.splice(2, 1);
        this.timelineList.set(result.data.category.frontPage);
      });
  }
}
