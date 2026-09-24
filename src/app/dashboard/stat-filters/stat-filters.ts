import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
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
  protected readonly fg = inject(FormBuilder).group({
    partialTitle: [''],
  });
}
