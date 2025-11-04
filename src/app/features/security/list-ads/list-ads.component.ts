import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  AlertTriangle,
  Bell,
  Camera,
  CheckCircle2,
  Trash2,
  Siren,
  LucideAngularModule
} from 'lucide-angular';

@Component({
  selector: 'security-list-ads',
  imports: [LucideAngularModule, NgClass],
  templateUrl: './list-ads.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListAds {
  // Íconos
  AlertTriangle = AlertTriangle;
  Bell = Bell;
  Camera = Camera;
  CheckCircle2 = CheckCircle2;
  Trash2 = Trash2;
  Siren = Siren;

  // Datos de ejemplo
  alerts = [
    { title: 'Movimiento detectado en pasillo', time: '09:24 AM', level: 'Alta', status: 'Pendiente', icon: AlertTriangle },
    { title: 'Puerta principal abierta', time: '09:12 AM', level: 'Media', status: 'Pendiente', icon: Bell },
    { title: 'Sensor de humo activado', time: '08:55 AM', level: 'Alta', status: 'Resuelta', icon: AlertTriangle },
    { title: 'Cámara desconectada - Garaje', time: '08:42 AM', level: 'Baja', status: 'Resuelta', icon: Bell },
  ];

  // Acciones
  onView(alert: any) {
    console.log('Ver alerta:', alert);
  }

  onResolve(alert: any) {
    console.log('Resolver alerta:', alert);
  }

  onDelete(alert: any) {
    console.log('Eliminar alerta:', alert);
  }
}
