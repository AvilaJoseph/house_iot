import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Addbutton } from '../../../shared/components/addbutton/addbutton.component';
import { Filterbutton } from '../../../shared/components/filterbutton/filterbutton.component';
import { Inputbutton } from "../../../shared/components/inputbutton/inputbutton.component";

@Component({
  selector: 'devices-topbar-devices',
  imports: [Addbutton, Filterbutton, Inputbutton],
  templateUrl: './topbar-devices.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopbarDevices { }
