import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VideoCardComponent } from '../video-card/video-card.component';
import IVideo from '../video-card/video-card.interface';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-videos-list',
  standalone: true,
  imports: [VideoCardComponent, CdkDrag, CdkDropList],
  templateUrl: './videos-list.component.html',
  styleUrl: './videos-list.component.scss'
})
export class VideosListComponent {

  @Input() allVideos: IVideo[] = []
  @Output() onVideoSelected = new EventEmitter

  constructor() {}

  ngOnInit() {

  }

  onClick(video: IVideo) {
    this.onVideoSelected.emit(video)
  }

}
