import { Component, input } from '@angular/core';
import { TimelineComponent } from '../components/timeline/timeline.component';
import { TimelineContent } from '../model/content.type';
import { BannerComponent } from '../components/banner/banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TimelineComponent, BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  timelines = input<Array<TimelineContent> | null>();
}
