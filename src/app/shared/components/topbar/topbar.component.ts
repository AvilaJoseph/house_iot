import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { LucideAngularModule, Bell, User, Zap, Moon, Settings, Menu } from 'lucide-angular';

@Component({
  selector: 'app-topbar',
  standalone: true,
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
  imports: [LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopbarComponent {
  @Output() toggleMenu = new EventEmitter<void>();

  readonly Bell = Bell;
  readonly User = User;
  readonly Zap = Zap;
  readonly Moon = Moon;
  readonly Settings = Settings;
  readonly Menu = Menu;

  onMenuClick() {
    this.toggleMenu.emit();
  }
}
