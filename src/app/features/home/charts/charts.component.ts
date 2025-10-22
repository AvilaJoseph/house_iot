import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TemperatureComponent } from "./temperature-charts/temperature-charts.component";


@Component({
    selector: 'home-charts',
    templateUrl: './charts.component.html',
    imports: [TemperatureComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ChartsComponent { }