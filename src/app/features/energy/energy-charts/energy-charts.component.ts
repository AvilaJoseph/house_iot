import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import {
  Chart,
  ChartConfiguration,
  ChartType,
  ScriptableContext,
  registerables
} from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'energy-energy-charts',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './energy-charts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnergyCharts {
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
    datasets: [
      {
        data: [4.2, 5.1, 5.6, 4.8, 6.0, 5.4, 4.9],
        label: 'Consumo diario (kWh)',
        fill: true,
        tension: 0.45,
        borderColor: '#22c55e',
        backgroundColor: (ctx: ScriptableContext<'line'>) => {
          const chart = ctx.chart;
          const { ctx: canvas, chartArea } = chart;
          if (!chartArea) return undefined;

          const gradient = canvas.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, 'rgba(34,197,94,0.05)');
          gradient.addColorStop(1, 'rgba(34,197,94,0.2)');
          return gradient;
        },
        pointBackgroundColor: '#16a34a',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#15803d',
        pointHoverBorderColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 7,
        borderWidth: 2.4,
      },
      {
        data: [3.9, 4.6, 5.2, 4.4, 5.5, 4.9, 4.5],
        label: 'Promedio semanal',
        borderDash: [6, 5],
        borderColor: '#9ca3af',
        pointRadius: 0,
        fill: false,
        tension: 0.3,
      },
    ],
  };

  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#334155',
          font: {
            family: 'Plus Jakarta Sans',
            size: 13,
            weight: 500, // ✅ ahora es número
          },
          usePointStyle: true,
          boxWidth: 8,
        },
      },
      tooltip: {
        backgroundColor: '#1e293b',
        titleColor: '#f8fafc',
        bodyColor: '#f1f5f9',
        cornerRadius: 8,
        padding: 10,
        boxPadding: 4,
        displayColors: false,
        titleFont: {
          family: 'Plus Jakarta Sans',
          size: 13,
          weight: 600, // ✅ ahora es número
        },
        bodyFont: {
          family: 'Plus Jakarta Sans',
          size: 12,
        },
        callbacks: {
          label: (context) => ` ${context.parsed.y} kWh`,
        },
      },
    },
    scales: {
      x: {
        grid: { color: 'rgba(226,232,240,0.5)' },
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
          callback: (value) => `${value} kWh`,
        },
      },
    },
  };

  public lineChartType: ChartType = 'line';
}
