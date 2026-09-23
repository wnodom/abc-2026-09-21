import {
  Component,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { VideoThumbnail } from '../video-thumbnail/video-thumbnail';
import { Video } from '../../types';

import { toSignal } from '@angular/core/rxjs-interop';
import { VideoDataService } from '../../video-data-service';

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

  protected readonly currentVideo = signal<Video | undefined>(
    undefined,
  );

  protected pickVideo(video: Video) {
    this.currentVideo.set(video);

    this.selectVideo.emit(video);
  }

  // private readonly currentVideoLogger = effect(() => {
  //   console.log(this.currentVideo());
  // });
}
