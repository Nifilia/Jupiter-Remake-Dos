import {
  Component,
  HostListener,
  inject,
  NO_ERRORS_SCHEMA,
  signal,
  OnInit,
} from '@angular/core';
import { TimelineComponent } from '../components/timeline/timeline.component';
import { TimelineContent } from '../model/content.type';
import { BannerComponent } from '../components/banner/banner.component';
import { CommonModule } from '@angular/common';
import { ContentService } from '../services/content.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TimelineComponent, BannerComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [NO_ERRORS_SCHEMA],
  providers: [ContentService],
})
export class HomeComponent implements OnInit {
  contentService = inject(ContentService);
  timelines = signal<TimelineContent[]>([]);
  shownTimelines = signal<TimelineContent[]>([]);
  loading = signal<boolean>(true);

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
        this.loading.set(false);
        result.data.category.frontPage.splice(2, 1);
        this.timelines.set(result.data.category.frontPage);
        this.shownTimelines.set(this.timelines()!.splice(0, 5));
      });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.body.offsetHeight;

    if (scrollPosition >= pageHeight - 50) {
      if (this.timelines()?.length == 0) return;

      // Reached bottom (with 50px buffer)
      if (this.timelines()) {
        const newTimelines: TimelineContent[] = this.timelines()!.splice(0, 3);
        this.shownTimelines.set(this.shownTimelines().concat(newTimelines));
      }
    }
  }
}
