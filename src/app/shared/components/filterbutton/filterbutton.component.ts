import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideAngularModule, Settings2 } from 'lucide-angular';

@Component({
  selector: 'filterbutton',
  imports: [LucideAngularModule],
  templateUrl: './filterbutton.component.html',
  styleUrls: ['./filterbutton.component.css'] ,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Filterbutton { 
  Settings2 = Settings2;
}
