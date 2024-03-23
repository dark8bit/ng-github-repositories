import { OnDestroy, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NgUnsubscriber implements OnDestroy {
  protected ngUnsubscribe$$ = new Subject();

  ngOnDestroy(): void {
    this.ngUnsubscribe$$.next(true);
    this.ngUnsubscribe$$.complete();
  }
}
