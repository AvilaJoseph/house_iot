import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'button-remote-lock',
  imports: [],
  templateUrl: './remote-lock.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemoteLock { }
