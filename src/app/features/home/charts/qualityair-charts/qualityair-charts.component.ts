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
  airQualityValue = 72; // Valor actual ICA (0–500)

  // 🔹 Categorías oficiales del ICA
  get airQualityLabel(): string {
    if (this.airQualityValue <= 50) return 'Bueno';
    if (this.airQualityValue <= 100) return 'Moderado';
    if (this.airQualityValue <= 150) return 'Nocivo para grupos sensibles';
    if (this.airQualityValue <= 200) return 'Insalubre';
    if (this.airQualityValue <= 300) return 'Muy insalubre';
    return 'Peligroso';
  }

  // 🔹 Colores según nivel de riesgo
  get progressColor(): string {
    if (this.airQualityValue <= 50) return 'text-green-500';        // Bueno
    if (this.airQualityValue <= 100) return 'text-yellow-400';      // Moderado
    if (this.airQualityValue <= 150) return 'text-orange-400';      // Nocivo (grupos sensibles)
    if (this.airQualityValue <= 200) return 'text-red-500';         // Insalubre
    if (this.airQualityValue <= 300) return 'text-purple-600';      // Muy insalubre
    return 'text-rose-700';                                         // Peligroso
  }

  // 🔹 Descripción opcional según nivel
  get airQualityDescription(): string {
    if (this.airQualityValue <= 50)
      return 'La calidad del aire es satisfactoria y presenta poco o ningún riesgo para la salud.';
    if (this.airQualityValue <= 100)
      return 'La calidad del aire es aceptable, pero ciertos contaminantes pueden representar un riesgo moderado para personas sensibles.';
    if (this.airQualityValue <= 150)
      return 'Los grupos sensibles (niños, ancianos o personas con enfermedades cardíacas o pulmonares) pueden experimentar efectos en la salud.';
    if (this.airQualityValue <= 200)
      return 'Todos pueden comenzar a experimentar efectos adversos para la salud.';
    if (this.airQualityValue <= 300)
      return 'Se activa una alerta sanitaria. Todos podrían experimentar efectos más graves.';
    return 'Se activa una alerta de emergencia sanitaria. Es probable que toda la población se vea afectada.';
  }
}
