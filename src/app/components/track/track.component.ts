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

  tickWidth: string = ''

  cursorXPos: string = '0px'

  constructor() {}

  ngOnInit() {
    this.generateTicks()
  }

  trackClicked(event: PointerEvent) {
    this.cursorXPos = (event.pageX - 40) + 'px'
  }

  ngOnChanges(changes: SimpleChange) {
    this.timelineLength = Math.max(15, Math.ceil(this.videoTotalDuration))
    this.tickWidth = 100 / this.timelineLength + '%'
    this.generateTicks()
  }

  generateTicks() {
    this.timeLineArray = [...Array(this.timelineLength).keys()]
  }

  updateTrack(increase: boolean) {
    if (increase) {
      this.timelineLength += 5
    } else {
      this.timelineLength -= 5
    }
    this.generateTicks()
  }

  onDrop(event: CdkDragDrop<IVideo>) {
    moveItemInArray(this.videosList, event.previousIndex, event.currentIndex);
  }
}
