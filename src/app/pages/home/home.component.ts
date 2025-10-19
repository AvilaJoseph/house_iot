import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarComponent } from "../../shared/components/sidebar/sidebar.component";
import { TopbarComponent } from "../../shared/components/topbar/topbar.component";
import { CommonModule } from '@angular/common';
import { ContentHomeComponent } from "../../features/home/content-home/content-home.component";

@Component({
  selector: 'home-page',
  imports: [SidebarComponent, TopbarComponent, CommonModule, ContentHomeComponent],
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
