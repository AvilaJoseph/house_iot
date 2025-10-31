import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'home-temperature',
  imports: [],
  templateUrl: './temperature.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Temperature { }
