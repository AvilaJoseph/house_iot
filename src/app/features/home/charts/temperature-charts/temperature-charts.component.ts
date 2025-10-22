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
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
    datasets: [
      {
        data: [22, 24, 23, 26, 25, 28],
        label: 'Temperatura °C',
        fill: true,
        tension: 0.5,
        borderColor: '#42A5F5',
        backgroundColor: 'rgba(66,165,245,0.2)',
      },
    ],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
  };

  public lineChartType: ChartType = 'line';
}
