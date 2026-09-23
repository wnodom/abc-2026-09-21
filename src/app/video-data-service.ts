import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Video } from './types';
import { map, tap } from 'rxjs';

function convertTitlesToUppercase(videos: Video[]) {
  return videos.map((video) => ({
    ...video,
    title: video.title.toLocaleUpperCase(),
  }));
}

@Service()
export class VideoDataService {
  private readonly http = inject(HttpClient);

  public loadVideos() {
    return this.http
      .get<Video[]>('https://api.angularbootcamp.com/videos')
      .pipe(
        tap((data) => console.table(data)),
        map(convertTitlesToUppercase),
        tap((data) => console.table(data)),
      );
  }
}
