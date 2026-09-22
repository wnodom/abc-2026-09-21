import { Component } from '@angular/core';
import { VideoList } from './video-list/video-list';

@Component({
  imports: [VideoList],
  selector: 'ns-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export default class Dashboard {}
