import {
  Component,
  inject,
  OnDestroy,
  output,
  signal,
} from '@angular/core';
import { VideoThumbnail } from '../video-thumbnail/video-thumbnail';
import { Video } from '../../types';

import { HttpClient } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  imports: [VideoThumbnail, AsyncPipe],
  selector: 'ns-video-list',
  styleUrl: './video-list.scss',
  templateUrl: './video-list.html',
})
export class VideoList {
  public readonly selectVideo = output<Video>();

  protected readonly showDetails = signal(true);

  protected readonly currentVideo = signal<Video | undefined>(
    undefined,
  );

  private readonly http = inject(HttpClient);

  private readonly videos$ = this.http.get<Video[]>(
    'https://api.angularbootcamp.com/videos',
  );

  protected readonly videos = toSignal(this.videos$, {
    initialValue: [],
  });

  protected pickVideo(video: Video) {
    this.currentVideo.set(video);

    this.selectVideo.emit(video);
  }

  // private readonly currentVideoLogger = effect(() => {
  //   console.log(this.currentVideo());
  // });
}
