import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {MatIconButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {CoreModule} from "../../../core/core.module";
import {debounceTime, distinctUntilChanged, map, tap} from "rxjs";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    MatFormField,
    MatIcon,
    ReactiveFormsModule,
    MatIconButton,
    MatInput,
    MatLabel,
    CoreModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  @Input() label = '';
  @Output() searchEvent = new EventEmitter<string>;

  public searchControl = new FormControl<string>('');

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        map(params => (params ?? '').trim()),
        tap((params) => this.searchEvent.emit(params))
      )
      .subscribe();
  }
}
