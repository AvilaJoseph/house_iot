import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'home-plan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-plan.component.html'
})
export class HomePlanComponent {
  rooms = [
    {
      id: 'entrada',
      name: 'Entrada',
      lights: [
        { id: 'l1', label: 'Luz 1', on: false },
        { id: 'l2', label: 'Luz 2', on: false },
        { id: 'l3', label: 'Luz 3', on: false }
      ]
    },
    {
      id: 'sala',
      name: 'Sala',
      lights: [
        { id: 'l1', label: 'Luz 1', on: true },
        { id: 'l2', label: 'Luz 2', on: true },
        { id: 'l3', label: 'Luz 3', on: false },
        { id: 'l4', label: 'Luz 4', on: false },
        { id: 'l5', label: 'Luz 5', on: true }
      ]
    },
    {
      id: 'cocina',
      name: 'Cocina',
      lights: [{ id: 'l1', label: 'Luz 1', on: false }]
    },
    {
      id: 'habitacion1',
      name: 'Habitación 1',
      lights: [{ id: 'l1', label: 'Luz 1', on: false }],
      ac: false
    },
    {
      id: 'habitacion2',
      name: 'Habitación 2',
      lights: [{ id: 'l1', label: 'Luz 1', on: true }],
      ac: true
    },
    {
      id: 'habitacion3',
      name: 'Habitación 3',
      lights: [{ id: 'l1', label: 'Luz 1', on: false }],
      ac: false
    },
    {
      id: 'baño',
      name: 'Baño',
      lights: [{ id: 'l1', label: 'Luz 1', on: false }]
    },
    {
      id: 'patio',
      name: 'Patio',
      lights: [{ id: 'l1', label: 'Luz 1', on: true }]
    },
    {
      id: 'habitacionFinal',
      name: 'Habitación final',
      lights: [
        { id: 'l1', label: 'Luz 1', on: false },
        { id: 'l2', label: 'Luz 2', on: true },
        { id: 'l3', label: 'Luz 3', on: false }
      ],
      ac: false
    }
  ];

  toggleLight(roomId: string, lightId: string) {
    const room = this.rooms.find(r => r.id === roomId);
    const light = room?.lights.find(l => l.id === lightId);
    if (light) light.on = !light.on;
  }

  toggleAC(roomId: string) {
    const room = this.rooms.find(r => r.id === roomId);
    if (room && room.ac !== undefined) room.ac = !room.ac;
  }

  getTotalLights(): number {
    return this.rooms.reduce((acc, r) => acc + (r.lights?.length || 0), 0);
  }

  getLightsOn(): number {
    return this.rooms.reduce((acc, r) => acc + (r.lights || []).filter(l => l.on).length, 0);
  }

  getRoomOnCount(room: any): number {
    return (room.lights || []).filter((l: any) => l.on).length;
  }
}
