import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'button-shut-down',
  imports: [],
  templateUrl: './shut-down.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShutDown { }
