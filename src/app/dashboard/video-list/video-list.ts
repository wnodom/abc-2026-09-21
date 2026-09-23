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
import { Subscription } from 'rxjs';

@Component({
  imports: [VideoThumbnail, AsyncPipe],
  selector: 'ns-video-list',
  styleUrl: './video-list.scss',
  templateUrl: './video-list.html',
})
export class VideoList implements OnDestroy {
  public readonly selectVideo = output<Video>();

  protected readonly showDetails = signal(true);

  protected readonly currentVideo = signal<Video | undefined>(
    undefined,
  );

  protected readonly videos = signal<Video[]>([]);

  // private readonly http = inject(HttpClient);

  protected videos$ = inject(HttpClient).get<Video[]>(
    'https://api.angularbootcamp.com/videos',
  );

  protected videoData: Video[] = [];

  private sub: Subscription;

  constructor() {
    this.sub = this.videos$.subscribe((data) =>
      this.videos.set(data),
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  protected pickVideo(video: Video) {
    this.currentVideo.set(video);

    this.selectVideo.emit(video);
  }

  // private readonly currentVideoLogger = effect(() => {
  //   console.log(this.currentVideo());
  // });
}
