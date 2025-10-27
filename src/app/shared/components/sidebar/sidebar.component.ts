import { ChangeDetectionStrategy, Component, Output, EventEmitter } from '@angular/core';
import { LucideAngularModule, Home, Lightbulb, Thermometer, Droplet, Zap, Camera, Lock, AlertCircle, BarChart3, Route } from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [LucideAngularModule, CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  @Output() menuItemClick = new EventEmitter<void>();

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
    { id: 'dashboard', label: 'Dashboard', icon: this.Home, routes: ['/home'] },
    { id: 'devices', label: 'Dispositivos', icon: this.Lightbulb, routes: ['/devices'] },
    { id: 'climate', label: 'Clima', icon: this.Thermometer, routes: ['/climate'] },
    { id: 'energy', label: 'Energía', icon: this.Zap, routes: ['/energy'] },
    { id: 'security', label: 'Seguridad', icon: this.Lock, routes: ['/security'] },
    { id: 'analytics', label: 'Análisis', icon: this.BarChart3, routes: ['/analytics'] },
  ];

  setActive(menuId: string) {
    this.activeMenu = menuId;
    this.menuItemClick.emit();
  }
}