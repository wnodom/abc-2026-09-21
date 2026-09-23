import { UpperCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  imports: [UpperCasePipe],
  selector: 'ns-video-thumbnail',
  styleUrl: './video-thumbnail.scss',
  templateUrl: './video-thumbnail.html',
})
export class VideoThumbnail {
  public readonly video = input<any>();
}
