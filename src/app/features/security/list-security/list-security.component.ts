import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import {
  LucideAngularModule,
  Video,
  Shield,
  Camera,
  Edit2,
  Trash2
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

  cameras = [
    { name: 'Cámara 1', location: 'Entrada principal', status: 'Activa', type: 'HD', icon: this.Camera },
    { name: 'Cámara 2', location: 'Pasillo central', status: 'Activa', type: 'Infrarroja', icon: this.Video },
    { name: 'Cámara 3', location: 'Parqueadero', status: 'En revisión', type: '360°', icon: this.Camera },
    { name: 'Cámara 4', location: 'Patio trasero', status: 'Inactiva', type: 'HD', icon: this.Camera },
  ];

  onView(camera: any) {
    console.log('Ver cámara', camera);
  }

  onEdit(camera: any) {
    console.log('Editar cámara', camera);
  }

  onDelete(camera: any) {
    const confirmed = confirm(`Eliminar ${camera.name}?`);
    if (!confirmed) return;
    this.cameras = this.cameras.filter((c) => c !== camera);
    console.log('Eliminada', camera);
  }
}
