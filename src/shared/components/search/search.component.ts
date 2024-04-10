import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatIconButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { CoreModule } from '../../../core/core.module';
import { debounceTime, distinctUntilChanged, takeUntil, tap } from 'rxjs';
import { MatOption, MatSelect } from '@angular/material/select';
import { LANGUAGES } from '@shared/consts/languages.const';
import { RepositorySearch } from '@app/repositories/interfaces/repository-search';
import { NgUnsubscriber } from '@shared/utils/unsubscriber';
import { ActivatedRoute } from '@angular/router';

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
  @Output() searchEvent = new EventEmitter<RepositorySearch>();

  public readonly searchForm = this.initForm();
  public readonly textFormControl = this.searchForm.get('q') as FormControl;
  public readonly languages = LANGUAGES;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    this.searchForm.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap((params) => this.searchEvent.emit(params)),
        takeUntil(this.ngUnsubscribe$$)
      )
      .subscribe();
  }

  private initForm(): FormGroup {
    const { q = '', language = null } = this.route.snapshot.queryParams;

    return this.fb.group({
      q: new FormControl(q),
      language: new FormControl(language),
    });
  }
}
