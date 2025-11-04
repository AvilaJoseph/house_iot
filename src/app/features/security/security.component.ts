import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListSecurity } from "./list-security/list-security.component";
import { ListAds } from "./list-ads/list-ads.component";

@Component({
  selector: 'home-security',
  imports: [ListSecurity, ListAds],
  templateUrl: './security.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecurityComponent { }
