import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatIconButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { CoreModule } from '../../../core/core.module';
import { debounceTime, distinctUntilChanged, takeUntil, tap } from 'rxjs';
import { MatOption, MatSelect } from '@angular/material/select';
import { LANGUAGES } from '@shared/consts/languages.const';
import { RepositorySearch } from '@app/repositories/interfaces/repository-search';
import { NgUnsubscriber } from '@shared/utils/unsubscriber';

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
    CoreModule,
    MatSelect,
    MatOption,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent extends NgUnsubscriber implements OnInit {
  @Input() params: RepositorySearch | null = null;
  @Output() searchEvent = new EventEmitter<RepositorySearch>();

  public readonly searchForm = this.fb.group({
    q: new FormControl(''),
    language: new FormControl<string | null | undefined>(null),
  });
  public readonly languages = LANGUAGES;

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.initSearchForm();
    this.searchFormValueChanges();
  }

  private initSearchForm() {
    const q = this.params?.q ?? '';
    const language = this.params?.language ?? null;

    this.searchForm.setValue({
      q,
      language,
    });
  }

  private searchFormValueChanges(): void {
    this.searchForm.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap((params) => this.searchEvent.emit(params)),
        takeUntil(this.ngUnsubscribe$$)
      )
      .subscribe();
  }
}
