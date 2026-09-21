import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from './about/about';
import { Help } from './help/help';

@Component({
  imports: [RouterOutlet, About, Help],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('workshop-app');

  protected addExcitement() {
    this.title.set(this.title() + '!');

    this.title.update((currentValue) => currentValue + '!');
  }
}
