import { CommonModule, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'devices-list-devices',
  imports: [CommonModule],
  templateUrl: './list-devices.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListDevices {
  DevicesList = [
    { name: 'Device 1', type: 'Sensor', udid: '12345', serialNumber: 'SN12345', status: 'Active', location: 'Living Room' },
    { name: 'Device 2', type: 'Camera', udid: '67890', serialNumber: 'SN67890', status: 'Inactive', location: 'Front Door' },
    { name: 'Device 3', type: 'Thermostat', udid: '54321', serialNumber: 'SN54321', status: 'Active', location: 'Bedroom' },
  ]
 }
