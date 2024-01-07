import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import IVideo from '../components/video-card/video-card.interface';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  private videosSubject: BehaviorSubject<IVideo[]> = new BehaviorSubject<IVideo[]>([])

  videos$: Observable<IVideo[]> = this.videosSubject.asObservable()

  constructor() { }

  getVideos() {
    this.videosSubject.next(MOCK_VIDEOS)
  }
}

const MOCK_VIDEOS: IVideo[] = [
  {
    id: 1,
    href: 'https://content.shuffll.com/files/background-music/1.mp4',
    title: 'Scene 1',
    duration: '5'
  },
  {
    id: 2,
    href: 'https://content.shuffll.com/files/background-music/2.mp4',
    title: 'Scene 2',
    duration: '5'
  },
  {
    id: 3,
    href: 'https://content.shuffll.com/files/background-music/3.mp4',
    title: 'Scene 3',
    duration: '5'
  },
]