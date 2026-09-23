import { Component, effect, signal } from '@angular/core';
import { VideoList } from './video-list/video-list';
import { VideoPlayer } from './video-player/video-player';
import { Video } from '../types';

@Component({
  imports: [VideoList, VideoPlayer],
  selector: 'ns-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export default class Dashboard {
  protected readonly currentVideo = signal<Video | undefined>(
    undefined,
  );

  private readonly currentVideoLogger = effect(() => {
    console.log(this.currentVideo());
  });
}
