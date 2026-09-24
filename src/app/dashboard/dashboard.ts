import {
  Component,
  effect,
  inject,
  signal,
} from '@angular/core';
import { VideoList } from './video-list/video-list';
import { VideoPlayer } from './video-player/video-player';
import { Video } from '../types';
import { VideoDataService } from '../video-data-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { StatFilters } from './stat-filters/stat-filters';

@Component({
  imports: [VideoList, VideoPlayer, StatFilters],
  selector: 'ns-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export default class Dashboard {
  protected readonly currentVideo = signal<Video | undefined>(
    undefined,
  );

  private readonly vds = inject(VideoDataService);

  protected readonly videoData = toSignal(
    this.vds.loadVideos(),
    {
      initialValue: [],
    },
  );

  private readonly currentVideoLogger = effect(() => {
    console.log(this.currentVideo());
  });
}
