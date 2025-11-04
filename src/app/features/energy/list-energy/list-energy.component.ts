import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideAngularModule, LineChart, TrendingUp, Zap, Battery, Activity } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'energy-list-energy',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './list-energy.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListEnergy {
  // Iconos Lucide
  LineChart = LineChart;
  TrendingUp = TrendingUp;
  Zap = Zap;
  Battery = Battery;
  Activity = Activity;

  // Datos simulados
  hours = [
    { time: '06:00 AM', consume: 120, unit: 'W', icon: this.Zap, desc: 'Encendido de luces' },
    { time: '09:00 AM', consume: 340, unit: 'W', icon: this.Battery, desc: 'Electrodomésticos activos' },
    { time: '12:00 PM', consume: 500, unit: 'W', icon: this.Activity, desc: 'Pico de consumo' },
    { time: '03:00 PM', consume: 260, unit: 'W', icon: this.Zap, desc: 'Uso moderado' },
    { time: '06:00 PM', consume: 410, unit: 'W', icon: this.Battery, desc: 'Equipos en funcionamiento' },
    { time: '09:00 PM', consume: 150, unit: 'W', icon: this.Activity, desc: 'Consumo estable' },
  ];

  // Texto de tendencia
  tendencia = 'El consumo promedio se mantiene dentro de los valores esperados.';
}
