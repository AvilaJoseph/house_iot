import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListSecurity } from "./list-security/list-security.component";
import { ListAds } from "./list-ads/list-ads.component";
import { SecurityPlanComponent } from "./camera-maps/camera-maps.component";
import { Addbutton } from "../../shared/components/addbutton/addbutton.component";

@Component({
  selector: 'home-security',
  imports: [ListSecurity, ListAds, SecurityPlanComponent, Addbutton],
  templateUrl: './security.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecurityComponent { }
