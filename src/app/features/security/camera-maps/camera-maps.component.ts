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
  selectedCamera: string | null = null; // formato "roomId-cameraId"

  rooms: Room[] = [
    {
      id: 'entrada',
      name: 'Entrada principal',
      cameras: [
        { id: 'c1', label: 'Cámara 1', on: true, x: 750, y: 95 },
        { id: 'c2', label: 'Cámara 2', on: false, x: 670, y: 260 },
      ],
    },
    {
      id: 'sala',
      name: 'Sala',
      cameras: [
        { id: 'c1', label: 'Cámara sala norte', on: true, x: 450, y: 200 },
        { id: 'c2', label: 'Cámara sala sur', on: false, x: 522, y: 311 },
      ],
    },
  ];

  // marcar cámara como seleccionada para verla (no cambia `on`)
  selectCamera(roomId: string, cameraId: string) {
    const key = `${roomId}-${cameraId}`;
    this.selectedCamera = this.selectedCamera === key ? null : key;
  }

  // Totales
  getTotalCameras(): number {
    return this.rooms.reduce((acc, r) => acc + (r.cameras?.length || 0), 0);
  }

  getCamerasOn(): number {
    return this.rooms.reduce(
      (acc, r) => acc + (r.cameras || []).filter((c) => c.on).length,
      0
    );
  }
}
