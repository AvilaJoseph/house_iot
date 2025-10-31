import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Sun, CloudRain, Cloud, Snowflake, Thermometer } from 'lucide-angular';
import { TemperatureStats } from './temperature-stats/temperature-stats.component';
import { TemperatureTrend } from "./temperature-trend/temperature-trend.component";

@Component({
  selector: 'home-temperature',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, TemperatureStats, TemperatureTrend],
  templateUrl: './temperature.component.html',
})
export class Temperature {
  // Señales reactivas
  temperaturaActual = signal(27); // Ejemplo estático, puede venir de una API

  // Iconos
  Sun = Sun;
  CloudRain = CloudRain;
  Cloud = Cloud;
  Snowflake = Snowflake;
  Thermometer = Thermometer;

  // Computed properties
  climaActual = computed(() => {
    const t = this.temperaturaActual();
    if (t > 30) return 'Soleado';
    if (t >= 20 && t <= 30) return 'Nublado';
    if (t >= 10 && t < 20) return 'Lluvioso';
    return 'Nevado';
  });

  iconoActual = computed(() => {
    const t = this.temperaturaActual();
    if (t > 30) return this.Sun;
    if (t >= 20 && t <= 30) return this.Cloud;
    if (t >= 10 && t < 20) return this.CloudRain;
    return this.Snowflake;
  });
}
