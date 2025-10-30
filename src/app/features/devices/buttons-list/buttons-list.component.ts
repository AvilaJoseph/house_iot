import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideAngularModule, Power, RefreshCcw, Lock } from 'lucide-angular';

@Component({
  selector: 'devices-buttons-list',
  imports: [LucideAngularModule],
  templateUrl: './buttons-list.component.html',
})
export class ButtonsListComponent {

  Power = Power;
  RefreshCcw = RefreshCcw;
  Lock = Lock;

  buttonsList = [
    { name: 'Apagar', icon: this.Power },
    { name: 'Reiniciar', icon: this.RefreshCcw },
    { name: 'Bloquear', icon: this.Lock },
  ];
}
