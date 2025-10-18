import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'home-stats',
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsComponent { }
