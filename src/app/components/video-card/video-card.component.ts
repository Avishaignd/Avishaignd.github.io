import { Component, EventEmitter, Input, Output } from '@angular/core';
import IVideo from './video-card.interface';

@Component({
  selector: 'app-video-card',
  standalone: true,
  imports: [],
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.scss'
})
export class VideoCardComponent {

  @Input() video?: IVideo
  @Output() onVideoSelected = new EventEmitter

  constructor() {}

  ngOnInit() {}

  onClickPlay() {
    this.onVideoSelected.emit(this.video)
  }
}
