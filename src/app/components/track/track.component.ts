import { CdkDrag, CdkDropList, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, SimpleChange, SimpleChanges, computed, signal } from '@angular/core';
import IVideo from '../video-card/video-card.interface';

@Component({
  selector: 'app-track',
  standalone: true,
  imports: [CdkDrag, CdkDropList],
  templateUrl: './track.component.html',
  styleUrl: './track.component.scss',
})
export class TrackComponent {

  @Input() videosList: IVideo[] = []

  @Input() videoTotalDuration: number = 0

  timelineLength: number = 16
  
  timeLineArray: number[] = []

  zoom: number = 16

  constructor() {}

  ngOnInit() {
    this.generateTicks()
  }

  ngOnChanges(changes: SimpleChange) {
    this.timelineLength = Math.max(15, Math.ceil(this.videoTotalDuration))
    this.generateTicks()
  }

  generateTicks() {
    this.timeLineArray = [...Array(this.timelineLength).keys()]
  }

  updateTrack(increase: boolean) {
    if (increase) {
      this.zoom += 5
    } else {
      this.zoom -= 5
    }
    this.generateTicks()
  }

  onDrop(event: CdkDragDrop<any>) {
    moveItemInArray(this.videosList, event.previousIndex, event.currentIndex);
  }
}
