import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideAngularModule, Home, Lightbulb, Thermometer, Droplet, Zap, Camera, Lock, AlertCircle, BarChart3 } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  // Iconos de Lucide
  Home = Home;
  Lightbulb = Lightbulb;
  Thermometer = Thermometer;
  Droplet = Droplet;
  Zap = Zap;
  Camera = Camera;
  Lock = Lock;
  AlertCircle = AlertCircle;
  BarChart3 = BarChart3;

  activeMenu = 'dashboard';

  menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: this.Home },
    { id: 'devices', label: 'Dispositivos', icon: this.Lightbulb },
    { id: 'climate', label: 'Clima', icon: this.Thermometer },
    { id: 'energy', label: 'Energía', icon: this.Zap },
    { id: 'security', label: 'Seguridad', icon: this.Lock },
    { id: 'analytics', label: 'Análisis', icon: this.BarChart3 },
  ];

  setActive(menuId: string) {
    this.activeMenu = menuId;
  }
}