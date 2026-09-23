import { UpperCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Video } from '../../types';

@Component({
  imports: [UpperCasePipe],
  selector: 'ns-video-thumbnail',
  styleUrl: './video-thumbnail.scss',
  templateUrl: './video-thumbnail.html',
})
export class VideoThumbnail {
  public readonly video = input.required<Video>();
  public readonly expanded = input<boolean>();
}
