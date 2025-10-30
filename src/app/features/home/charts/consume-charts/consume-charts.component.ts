import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, ChartConfiguration, ChartType, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'home-consume-charts',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './consume-charts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsumeCharts {
  public barChartData: ChartConfiguration['data'] = {
    labels: [
      'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'
    ],
    datasets: [
      {
        data: [120, 150, 180, 130, 160, 200, 170],
        label: 'Consumo Energético (kWh)',
        backgroundColor: 'rgba(251, 255, 0, 0.34)',
        borderColor: '#e6e91876',
        borderWidth: 1.5,
        borderRadius: 6,
        hoverBackgroundColor: '#fbff00ab',
      },
    ],
  };

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
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
        grid: { color: 'rgba(226,232,240,0.3)' },
        ticks: { color: '#475569', font: { family: 'Plus Jakarta Sans', size: 12 } },
      },
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(226,232,240,0.3)' },
        ticks: {
          color: '#475569',
          font: { family: 'Plus Jakarta Sans', size: 12 },
          callback: (value) => `${value} kWh`,
          
        },
      },
    },
  };

  public barChartType: ChartType = 'bar';
}
