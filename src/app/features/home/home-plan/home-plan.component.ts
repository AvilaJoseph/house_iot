import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Light {
  id: string;
  label: string;
  on: boolean;
  x: number;
  y: number;
}

interface Room {
  id: string;
  name: string;
  lights: Light[];
  ac?: boolean;
  acX?: number;
  acY?: number;
}

@Component({
  selector: 'home-plan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-plan.component.html',
  styleUrls: ['./home-plan.component.css']
})
export class HomePlanComponent {
  hoveredLight: string | null = null;
  hoveredAC: string | null = null;

  rooms: Room[] = [
    {
      id: 'Baño',
      name: 'Baño',
      lights: [
        { id: 'l1', label: 'Luz 1', on: false, x: 670, y: 260 },
        { id: 'l2', label: 'Luz 2', on: false, x: 223, y: 290 },
      ]
    },
    {
      id: 'habitacion1',
      name: 'Habitación 1',
      lights: [{ id: 'l1', label: 'Luz 1', on: false, x: 627, y: 113 }],
      ac: false,
      acX: 627,
      acY: 88
    },
    {
      id: 'habitacion2',
      name: 'Habitación 2',
      lights: [{ id: 'l1', label: 'Luz 1', on: true, x: 450, y: 134 }],
      ac: true,
      acX: 450,
      acY: 109
    },
    {
      id: 'habitacion3',
      name: 'Habitación 3',
      lights: [{ id: 'l1', label: 'Luz 1', on: true, x: 279, y: 112 }],
      ac: true,
      acX: 297,
      acY: 45
    },
    {
      id: 'Habitacion4',
      name: 'Habitación 4',
      lights: [
        { id: 'l1', label: 'Luz 1', on: false, x: 103, y: 142 },
      ],
      ac: false,
      acX: 108,
      acY: 45
    },
    {
      id: 'habitacionFinal',
      name: 'entrada',
      lights: [
        { id: 'l1', label: 'Luz 1', on: true, x: 750, y: 95 },
        { id: 'l2', label: 'Luz 2', on: false, x: 750, y: 470 }
      ]
    },
    {
      id: 'patio',
      name: 'Patio',
      lights: [{ id: 'l1', label: 'Luz 1', on: true, x: 385, y: 470 }]
    },
    {
      id: 'sala',
      name: 'Sala',
      lights: [
        { id: 'l3', label: 'Luz 3', on: true, x: 380, y: 309 },
        { id: 'l2', label: 'Luz 2', on: false, x: 522, y: 311 },
        { id: 'l1', label: 'Luz 1', on: false, x: 655, y: 378 }
      ]
    }
  ];

  toggleLight(roomId: string, lightId: string): void {
    const room = this.rooms.find(r => r.id === roomId);
    const light = room?.lights.find(l => l.id === lightId);
    if (light) {
      light.on = !light.on;
    }
  }

  toggleLightByCoords(roomId: string, lightId: string): void {
    this.toggleLight(roomId, lightId);
  }

  toggleAC(roomId: string): void {
    const room = this.rooms.find(r => r.id === roomId);
    if (room && room.ac !== undefined) {
      room.ac = !room.ac;
    }
  }

  getTotalLights(): number {
    return this.rooms.reduce((acc, r) => acc + (r.lights?.length || 0), 0);
  }

  getLightsOn(): number {
    return this.rooms.reduce((acc, r) => acc + (r.lights || []).filter(l => l.on).length, 0);
  }

  getTotalAC(): number {
    return this.rooms.filter(r => r.ac !== undefined).length;
  }

  getACOn(): number {
    return this.rooms.filter(r => r.ac === true).length;
  }

  getRoomOnCount(room: Room): number {
    return (room.lights || []).filter(l => l.on).length;
  }
}