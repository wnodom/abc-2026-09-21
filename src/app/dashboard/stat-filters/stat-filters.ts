import { JsonPipe } from '@angular/common';
import { Component, inject, output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule, JsonPipe],
  selector: 'ns-stat-filters',
  styleUrl: './stat-filters.scss',
  templateUrl: './stat-filters.html',
})
export class StatFilters {
  public readonly partialTitleChanged = output<string>();

  protected readonly fg = inject(FormBuilder).group({
    partialTitle: [''],
  });

  constructor() {
    this.fg.controls.partialTitle.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe((v) => {
        console.log(v);
        this.partialTitleChanged.emit(v ?? '');
      });
  }
}
