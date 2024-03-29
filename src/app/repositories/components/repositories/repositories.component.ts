import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Repository} from "../../../../shared/interfaces/repository.interface";

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrl: './repositories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepositoriesComponent {
  @Input() repositories: Repository[] = [];
}
