import {
  Component,
  ElementRef,
  input,
  Renderer2,
  signal,
  ViewChild,
} from '@angular/core';
import { TimelineItem } from '../../model/content.type';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  @ViewChild('timeline__container')
  timelineContainer!: ElementRef<HTMLDivElement>;
  scroll = signal(0);
  scrollLimits = signal([0, 0]);
  title = input('Placeholder');
  headerUrl = input('test');
  items = input<Array<TimelineItem>>([]);

  constructor() {
    setTimeout(() => {
      this.scrollLimits.set([
        100,
        this.timelineContainer.nativeElement.clientWidth - 100,
      ]);
    }, 100);
  }

  scrollLeft() {
    if (this.scroll() > this.scrollLimits()[0])
      this.scroll.set(this.scroll() - 200);
  }

  scrollRight() {
    if (this.scroll() < this.scrollLimits()[1])
      this.scroll.set(this.scroll() + 200);
  }
}
