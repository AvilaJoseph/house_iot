import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Droplet, Wind, Gauge } from 'lucide-angular';

@Component({
  selector: 'temperature-temperature-stats',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './temperature-stats.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemperatureStats {
  stats = [
    {
      label: 'Humedad', value: 60, color: 'text-blue-600', bg: 'bg-blue-100', icon: Droplet,
    },
    {
      label: 'Viento', value: 9, unit: 'km/h', color: 'text-green-600', bg: 'bg-green-100', icon: Wind,
    },
    {
      label: 'Presión', value: 1016, unit: 'hPa', color: 'text-yellow-600', bg: 'bg-yellow-100', icon: Gauge,
    },
  ];
}
