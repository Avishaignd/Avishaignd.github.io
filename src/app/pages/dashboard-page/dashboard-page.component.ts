import { Component } from '@angular/core';
import { VideosService } from '../../services/videos.service';
import { VideosListComponent } from '../../components/videos-list/videos-list.component';
import IVideo from '../../components/video-card/video-card.interface';
import { PreviewComponent } from '../../components/preview/preview.component';
import { DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import {CdkDragDrop, CdkDropList, CdkDrag, copyArrayItem} from '@angular/cdk/drag-drop';
import { TrackComponent } from '../../components/track/track.component';
import * as _ from 'lodash'

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [VideosListComponent, PreviewComponent, DragDropModule, TrackComponent, CdkDropList],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {

  allVideos: IVideo[] = []

  trackVideos: IVideo[] = []

  currentVideo: IVideo = {} as IVideo

  currentVideoIndex: number = 0

  autoplayVideos: boolean = false

  isVideoPlaying: boolean = false

  get videoTotalDuration() {
    return _.sumBy(this.trackVideos, (video: IVideo) => video.duration)
  }

  constructor(private videosService: VideosService) {}

  ngOnInit() {
    this.videosService.videos$.subscribe(videos => {
      this.allVideos = videos
    })
    this.videosService.getVideos()
  }

  setCurrentVideo(video: IVideo) {
    this.currentVideo = video
  }

  drop(event: CdkDragDrop<IVideo[]>) {
    if (event.container === event.previousContainer) {
      moveItemInArray(this.trackVideos, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(this.allVideos, this.trackVideos, event.previousIndex, event.currentIndex)
    }
  }

  playAll() {
    this.autoplayVideos = true
    this.currentVideo = this.trackVideos[this.currentVideoIndex]
    if (this.currentVideoIndex === this.trackVideos.length) {
      this.isVideoPlaying = false
    } else {
      this.isVideoPlaying = true
    }
  }

  playNext() {
    if (this.currentVideoIndex < this.trackVideos.length) {
      this.currentVideoIndex ++
      this.playAll()
    }
    
  }
}
