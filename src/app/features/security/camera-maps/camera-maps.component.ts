import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Camera {
  id: string;
  label: string;
  on: boolean;
  x: number;
  y: number;
}

interface Room {
  id: string;
  name: string;
  cameras: Camera[];
  ac?: boolean;
  acX?: number;
  acY?: number;
}

@Component({
  selector: 'security-security-plan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './camera-maps.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecurityPlanComponent {
  hoveredCamera: string | null = null;
  hoveredAC: string | null = null;

  rooms: Room[] = [
    {
      id: 'entrada',
      name: 'Entrada principal',
      cameras: [
        { id: 'c1', label: 'Cámara 1', on: true, x: 750, y: 95 },
        { id: 'c2', label: 'Cámara 2', on: false, x: 670, y: 260 },
      ],
      ac: true,
      acX: 720,
      acY: 180,
    },
    {
      id: 'sala',
      name: 'Sala',
      cameras: [
        { id: 'c1', label: 'Cámara sala norte', on: true, x: 450, y: 200 },
        { id: 'c2', label: 'Cámara sala sur', on: false, x: 522, y: 311 },
      ],
      ac: false,
      acX: 480,
      acY: 240,
    },
  ];

  // 🔹 Alternar cámara
  toggleCamera(roomId: string, cameraId: string): void {
    const room = this.rooms.find((r) => r.id === roomId);
    const camera = room?.cameras.find((c) => c.id === cameraId);
    if (camera) camera.on = !camera.on;
  }

  // 🔹 Alternar aire acondicionado
  toggleAC(roomId: string): void {
    const room = this.rooms.find((r) => r.id === roomId);
    if (room && room.ac !== undefined) {
      room.ac = !room.ac;
    }
  }

  // 🔹 Total de cámaras
  getTotalCameras(): number {
    return this.rooms.reduce((acc, r) => acc + (r.cameras?.length || 0), 0);
  }

  // 🔹 Cámaras activas
  getCamerasOn(): number {
    return this.rooms.reduce(
      (acc, r) => acc + (r.cameras || []).filter((c) => c.on).length,
      0
    );
  }

  // 🔹 Total de aires
  getTotalAC(): number {
    return this.rooms.filter((r) => r.ac !== undefined).length;
  }

  // 🔹 Aires encendidos
  getACOn(): number {
    return this.rooms.filter((r) => r.ac === true).length;
  }
}
