import { Component, Input } from '@angular/core';
import IVideo from '../video-card/video-card.interface';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss'
})
export class PreviewComponent {

  @Input() currentVideo?: IVideo

  constructor() {}

  ngOnInit() {

  }
}
