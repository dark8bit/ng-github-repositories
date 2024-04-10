import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AtobTextPipe } from './pipes/atob-text.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { SharedHelperService } from '@shared/helpers/shared-helper.service';

const materialComponents = [
  MatCard,
  MatCardHeader,
  MatCardContent,
  MatCardActions,
  MatCardImage,
  MatButton,
  MatCardSubtitle,
  MatCardTitle,
];

@NgModule({
  declarations: [AtobTextPipe, SafeHtmlPipe],
  exports: [
    AtobTextPipe,
    SafeHtmlPipe,
    AsyncPipe,
    NgFor,
    NgIf,
    ...materialComponents,
  ],
  imports: [RouterOutlet, AsyncPipe, NgFor, NgIf, ...materialComponents],
  providers: [SharedHelperService],
})
export class SharedModule {}
