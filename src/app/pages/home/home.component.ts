import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarComponent } from "../../shared/components/sidebar/sidebar.component";
import { TopbarComponent } from "../../shared/components/topbar/topbar.component";

@Component({
  selector: 'app-home',
  imports: [SidebarComponent, TopbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar() {
    this.sidebarOpen = false;
  }
}
