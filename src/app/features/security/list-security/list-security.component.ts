import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor, NgClass, NgIf } from '@angular/common';
import {
  LucideAngularModule,
  Video,
  Shield,
  Camera,
  Edit2,
  Trash2,
  AlertTriangle
} from 'lucide-angular';

@Component({
  selector: 'security-list-security',
  imports: [LucideAngularModule, NgClass],
  templateUrl: './list-security.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListSecurity {
  Camera = Camera;
  Video = Video;
  Shield = Shield;
  Edit2 = Edit2;
  Trash2 = Trash2;
  AlertTriangle = AlertTriangle;

  expandedCamera: any = null;

  cameras = [
    {
      name: 'Cámara 1',
      location: 'Entrada principal',
      status: 'Activa',
      type: 'HD',
      icon: this.Camera,
      warnings: [
        { title: 'Movimiento detectado', time: '10:32 AM', level: 'Alta' },
        { title: 'Objeto sospechoso', time: '10:45 AM', level: 'Media' },
      ],
    },
    {
      name: 'Cámara 2',
      location: 'Pasillo central',
      status: 'Activa',
      type: 'Infrarroja',
      icon: this.Video,
      warnings: [],
    },
    {
      name: 'Cámara 3',
      location: 'Parqueadero',
      status: 'En revisión',
      type: '360°',
      icon: this.Camera,
      warnings: [
        { title: 'Pérdida de señal', time: '9:10 AM', level: 'Alta' },
      ],
    },
    {
      name: 'Cámara 4',
      location: 'Patio trasero',
      status: 'Inactiva',
      type: 'HD',
      icon: this.Camera,
      warnings: [],
    },
  ];

  toggleExpand(camera: any) {
    this.expandedCamera = this.expandedCamera === camera ? null : camera;
  }

  onEdit(camera: any) {
    console.log('Editar cámara', camera);
  }

  onDelete(camera: any) {
    const confirmed = confirm(`Eliminar ${camera.name}?`);
    if (!confirmed) return;
    this.cameras = this.cameras.filter((c) => c !== camera);
  }

  onViewWarning(warning: any, camera: any) {
    console.log(`Ver advertencia "${warning.title}" de ${camera.name}`);
  }
}
