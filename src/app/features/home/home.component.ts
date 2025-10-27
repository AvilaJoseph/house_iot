import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StatsComponent } from "./stats/stats.component";
import { ContentHomeComponent } from "./content-home/content-home.component";

@Component({
    selector: 'home-page',
    standalone: true,
    templateUrl: './home.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ContentHomeComponent]
})
export class HomeComponent {

}
