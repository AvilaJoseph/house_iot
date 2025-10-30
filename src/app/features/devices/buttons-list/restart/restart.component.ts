import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'button-restart',
  imports: [],
  templateUrl: './restart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Restart { }
