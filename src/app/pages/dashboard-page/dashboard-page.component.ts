import { Component } from '@angular/core';
import { VideosService } from '../../services/videos.service';
import { VideosListComponent } from '../../components/videos-list/videos-list.component';
import IVideo from '../../components/video-card/video-card.interface';
import { PreviewComponent } from '../../components/preview/preview.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkDragDrop, CdkDropList, CdkDrag, copyArrayItem} from '@angular/cdk/drag-drop';
import { TrackComponent } from '../../components/track/track.component';


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

  constructor(private videosService: VideosService) {}

  ngOnInit() {
    this.videosService.videos$.subscribe(videos => {
      this.allVideos = videos
      this.currentVideo = this.allVideos[0]
    })
    this.videosService.getVideos()
  }

  setCurrentVideo(video: IVideo) {
    this.currentVideo = video
  }

  drop(event: CdkDragDrop<any>) {
    if (event.container === event.previousContainer) {
      return
    } else {
      copyArrayItem(this.allVideos, this.trackVideos, event.previousIndex, event.currentIndex)
    }
  }
}
