import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'atobText',
})
export class AtobTextPipe implements PipeTransform {
  transform(text: string | undefined): string {
    if (!text?.trim()?.length) {
      return '';
    }

    return atob(text);
  }
}
