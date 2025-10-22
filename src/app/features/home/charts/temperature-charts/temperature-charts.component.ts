import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, ChartConfiguration, ChartType, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'home-temperature-charts',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './temperature-charts.component.html',
  styleUrls: ['./temperature-charts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemperatureComponent {
  public lineChartData: ChartConfiguration['data'] = {
    labels: [
      'Lun - 6 AM', 'Lun - 9 AM', 'Lun - 12 PM', 'Lun - 3 PM', 'Lun - 6 PM',
      'Mar - 6 AM', 'Mar - 9 AM', 'Mar - 12 PM', 'Mar - 3 PM', 'Mar - 6 PM'
    ],
    datasets: [
      {
        data: [21, 23, 26, 28, 24, 22, 25, 27, 29, 26],
        label: 'Temperatura (°C)',
        fill: true,
        tension: 0.4,
        borderColor: '#3B82F6', // azul moderno
        backgroundColor: 'rgba(59, 130, 246, 0.15)',
        pointBackgroundColor: '#3B82F6',
        pointBorderColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#1E293B',
          font: { size: 13, weight: 'bold' },
        },
      },
    },
    scales: {
      x: {
        grid: { color: 'rgba(226,232,240,0.4)' },
        ticks: { color: '#64748B' },
      },
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(226,232,240,0.4)' },
        ticks: { color: '#64748B' },
      },
    },
  };

  public lineChartType: ChartType = 'line';
}
