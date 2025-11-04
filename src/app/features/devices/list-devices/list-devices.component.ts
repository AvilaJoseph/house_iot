import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LucideAngularModule, Monitor, Camera, MoreVertical } from 'lucide-angular';
import { NgClass } from '@angular/common';

@Component({
  selector: 'devices-list-devices',
  standalone: true,
  imports: [LucideAngularModule, NgClass],
  templateUrl: './list-devices.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListDevices {
  Monitor = Monitor;
  Camera = Camera;
  MoreVertical = MoreVertical;

  DevicesList = [
    {
      name: 'Sensor de temperatura',
      type: 'IoT',
      serialNumber: 'TX-001',
      udid: 'ABC123XYZ',
      status: 'Active',
      location: 'Laboratorio 1',
    },
    {
      name: 'Cámara térmica',
      type: 'CCTV',
      serialNumber: 'CT-045',
      udid: 'XYZ987ABC',
      status: 'Inactive',
      location: 'Entrada principal',
    },
  ];

  onViewDevice(device: any) {
    console.log('Ver dispositivo:', device);
  }
}
