import { Component } from '@angular/core';
import { TimelineComponent } from '../components/timeline/timeline.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TimelineComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}