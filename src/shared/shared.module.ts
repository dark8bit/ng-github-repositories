import {NgModule} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {AtobTextPipe} from "./pipes/atob-text.pipe";
import {SafeHtmlPipe} from "./pipes/safe-html.pipe";

@NgModule({
  declarations: [AtobTextPipe, SafeHtmlPipe],
  exports: [
    AtobTextPipe,
    SafeHtmlPipe
  ],
  imports: [
    RouterOutlet,
  ]
})
export class SharedModule {
}
