import { Component, Input } from '@angular/core';
import IVideo from '../video-card/video-card.interface';

@Component({
  selector: 'app-track',
  standalone: true,
  imports: [],
  templateUrl: './track.component.html',
  styleUrl: './track.component.scss'
})
export class TrackComponent {

  @Input() videosList: IVideo[] = []

  timelineLength: number = 16
  
  timeLineArray: number[] = [...Array(this.timelineLength).keys()]

  constructor() {}

  ngOnInit() {
  }

}
