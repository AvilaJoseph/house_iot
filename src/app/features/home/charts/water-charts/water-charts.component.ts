import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, ChartConfiguration, ChartType, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'home-water-charts',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './water-charts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaterCharts {
  public lineChartData: ChartConfiguration['data'] = {
    labels: [
      'Lun - 6 AM', 'Lun - 9 AM', 'Lun - 12 PM', 'Lun - 3 PM', 'Lun - 6 PM',
      'Mar - 6 AM', 'Mar - 9 AM', 'Mar - 12 PM', 'Mar - 3 PM', 'Mar - 6 PM'
    ],
    datasets: [
      {
        data: [120, 135, 150, 160, 145, 130, 140, 155, 165, 150],
        label: 'Consumo de Agua (L)',
        fill: true,
        tension: 0.6,
        borderColor: '#0ea5e9', // azul-500 (agua)
        backgroundColor: 'rgba(14, 165, 233, 0.15)', // azul con transparencia
        pointBackgroundColor: '#0284c7',
        pointBorderColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
      },
    ],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false, // ✅ ocupa todo el div
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1e293b',
        titleColor: '#f8fafc',
        bodyColor: '#f1f5f9',
        cornerRadius: 6,
        padding: 8,
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: { color: 'rgba(226,232,240,0.4)' },
        ticks: {
          color: '#475569',
          font: { family: 'Plus Jakarta Sans', size: 12 },
        },
      },
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(226,232,240,0.4)' },
        ticks: {
          color: '#475569',
          font: { family: 'Plus Jakarta Sans', size: 12 },
          callback: (value) => `${value} L`,
        },
      },
    },
  };

  public lineChartType: ChartType = 'line';
}
