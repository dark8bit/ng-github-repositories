import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {SearchComponent} from "../../../../shared/components/search/search.component";
import {AsyncPipe} from "@angular/common";
import {Repository} from "../../../../shared/interfaces/repository.interface";
import {
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-repositories',
  standalone: true,
  imports: [
    SearchComponent,
    AsyncPipe,

    // Material
    MatCard,
    MatCardHeader,
    MatCardImage,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatCardSubtitle,
    MatCardTitle,
    MatCardAvatar,
    RouterLink
  ],
  templateUrl: './repositories.component.html',
  styleUrl: './repositories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepositoriesComponent {
  @Input() repositories: Repository[] = [];
}
