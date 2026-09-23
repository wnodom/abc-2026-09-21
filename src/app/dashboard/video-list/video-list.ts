import { Component, input, output, signal } from '@angular/core';
import { VideoThumbnail } from '../video-thumbnail/video-thumbnail';
import { Video } from '../../types';

@Component({
  imports: [VideoThumbnail],
  selector: 'ns-video-list',
  styleUrl: './video-list.scss',
  templateUrl: './video-list.html',
})
export class VideoList {
  public readonly videos = input.required<Video[]>();
  public readonly selectVideo = output<Video>();

  protected readonly showDetails = signal(true);
  protected readonly chosenVideo = signal<Video | undefined>(
    undefined,
  );

  protected pickVideo(video: Video) {
    this.chosenVideo.set(video);
    this.selectVideo.emit(video);
  }
}
