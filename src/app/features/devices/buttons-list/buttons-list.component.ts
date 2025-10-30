import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'devices-buttons-list',
  standalone: true,
  imports: [],
  templateUrl: './buttons-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonsListComponent {
  buttonsList = [
    { name: 'Shut Down', icon: 'power_settings_new' },
    { name: 'Restart', icon: 'refresh' },
    { name: 'Lock', icon: 'lock' },
  ];
}
