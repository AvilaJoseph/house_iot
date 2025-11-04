import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Bolt, BarChart3, Gauge, DollarSign } from 'lucide-angular';

@Component({
  selector: 'energy-energy-stats',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './energy-stats.component.html',
})
export class EnergyStats {
  // Iconos Lucide
  Bolt = Bolt;
  BarChart3 = BarChart3;
  Gauge = Gauge;
  DollarSign = DollarSign;

  // Datos estáticos (pueden venir de una API o señal reactiva)
  energyStats = signal([
    {
      title: 'Consumo actual',
      consume: '230',
      typeconsume: 'W',
      date: '09:30 AM',
      icon: this.Bolt,
      color: 'from-yellow-400 to-amber-500',
    },
    {
      title: 'Consumo diario',
      consume: '5.4',
      typeconsume: 'kWh',
      date: 'Promedio hoy',
      icon: this.BarChart3,
      color: 'from-blue-400 to-sky-600',
    },
    {
      title: 'Eficiencia energética',
      consume: '92',
      typeconsume: '%',
      date: 'Día anterior',
      icon: this.Gauge,
      color: 'from-green-400 to-emerald-600',
    },
    {
      title: 'Costo estimado',
      consume: '1.12',
      typeconsume: '$',
      date: 'Total diario',
      icon: this.DollarSign,
      color: 'from-emerald-400 to-teal-600',
    },
  ]);
}
