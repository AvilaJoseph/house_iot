import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Sun, Cloud, CloudSun, Moon, LineChart, TrendingUp } from 'lucide-angular';

@Component({
  selector: 'temperature-temperature-trend',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './temperature-trend.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemperatureTrend {
  // Iconos
  Sun = Sun;
  Cloud = Cloud;
  CloudSun = CloudSun;
  Moon = Moon;
  LineChart = LineChart;
  TrendingUp = TrendingUp;

  // Datos horarios - IMPORTANTE: usar las referencias directas, no this
  hours = [
    { time: '06:00', temp: 17, icon: Cloud, desc: 'Nublado' },
    { time: '09:00', temp: 20, icon: CloudSun, desc: 'Parcialmente soleado' },
    { time: '12:00', temp: 23, icon: Sun, desc: 'Soleado' },
    { time: '15:00', temp: 24, icon: Sun, desc: 'Soleado' },
    { time: '18:00', temp: 21, icon: CloudSun, desc: 'Atardecer' },
    { time: '21:00', temp: 18, icon: Moon, desc: 'Noche despejada' },
  ];

  tendencia = 'Temperatura estable durante la tarde 🌤️';
}