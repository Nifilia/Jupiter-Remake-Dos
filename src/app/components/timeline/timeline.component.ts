import {
  Component,
  ElementRef,
  input,
  Renderer2,
  signal,
  ViewChild,
} from '@angular/core';

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
  items = input([
    {
      heading: 'Aktuaalne Kaamera',
      type: 'series',
      photo: 'https://s.err.ee/photo/orig/2023/01/03/1731277h1d4c.jpg',
    },
    {
      heading: 'Armastuse olemus',
      type: 'movie',
      photo: 'https://s.err.ee/photo/orig/2025/06/16/2901228h76e8.jpg',
    },
    {
      heading: 'Armastuse olemus',
      type: 'movie',
      photo: 'https://s.err.ee/photo/orig/2025/06/16/2901228h76e8.jpg',
    },
    {
      heading: 'Armastuse olemus',
      type: 'movie',
      photo: 'https://s.err.ee/photo/orig/2025/06/16/2901228h76e8.jpg',
    },
    {
      heading: 'Armastuse olemus',
      type: 'movie',
      photo: 'https://s.err.ee/photo/orig/2025/06/16/2901228h76e8.jpg',
    },
    {
      heading: 'Armastuse olemus',
      type: 'movie',
      photo: 'https://s.err.ee/photo/orig/2025/06/16/2901228h76e8.jpg',
    },
    {
      heading: 'Armastuse olemus',
      type: 'movie',
      photo: 'https://s.err.ee/photo/orig/2025/06/16/2901228h76e8.jpg',
    },
    {
      heading: 'Armastuse olemus',
      type: 'movie',
      photo: 'https://s.err.ee/photo/orig/2025/06/16/2901228h76e8.jpg',
    },
    {
      heading: 'Armastuse olemus',
      type: 'movie',
      photo: 'https://s.err.ee/photo/orig/2025/06/16/2901228h76e8.jpg',
    },
    {
      heading: 'Armastuse olemus',
      type: 'movie',
      photo: 'https://s.err.ee/photo/orig/2025/06/16/2901228h76e8.jpg',
    },
    {
      heading: 'Armastuse olemus',
      type: 'movie',
      photo: 'https://s.err.ee/photo/orig/2025/06/16/2901228h76e8.jpg',
    },
    {
      heading: 'Armastuse olemus',
      type: 'movie',
      photo: 'https://s.err.ee/photo/orig/2025/06/16/2901228h76e8.jpg',
    },
    {
      heading: 'Armastuse olemus',
      type: 'movie',
      photo: 'https://s.err.ee/photo/orig/2025/06/16/2901228h76e8.jpg',
    },
    {
      heading: 'Armastuse olemus',
      type: 'movie',
      photo: 'https://s.err.ee/photo/orig/2025/06/16/2901228h76e8.jpg',
    },
    {
      heading: 'Armastuse olemus',
      type: 'movie',
      photo: 'https://s.err.ee/photo/orig/2025/06/16/2901228h76e8.jpg',
    },
    {
      heading: 'Armastuse olemus',
      type: 'movie',
      photo: 'https://s.err.ee/photo/orig/2025/06/16/2901228h76e8.jpg',
    },
    {
      heading: 'Armastuse olemus',
      type: 'movie',
      photo: 'https://s.err.ee/photo/orig/2025/06/16/2901228h76e8.jpg',
    },
  ]);

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
