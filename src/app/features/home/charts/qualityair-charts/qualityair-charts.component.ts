import { NgClass } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'home-qualityair-charts',
  standalone: true,
  imports: [NgClass],
  templateUrl: './qualityair-charts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QualityairCharts {
  airQualityValue = 72; // Valor AQI (0–300)

  get airQualityLabel(): string {
    if (this.airQualityValue <= 50) return 'Excelente';
    if (this.airQualityValue <= 100) return 'Buena';
    if (this.airQualityValue <= 150) return 'Moderada';
    if (this.airQualityValue <= 200) return 'Mala';
    return 'Peligrosa';
  }

  get progressColor(): string {
    if (this.airQualityValue <= 50) return 'text-green-500';
    if (this.airQualityValue <= 100) return 'text-lime-500';
    if (this.airQualityValue <= 150) return 'text-yellow-500';
    if (this.airQualityValue <= 200) return 'text-orange-500';
    return 'text-red-600';
  }
}
