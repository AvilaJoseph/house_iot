import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideAngularModule, Search } from 'lucide-angular';


@Component({
  selector: 'inputbutton',
  imports: [LucideAngularModule],
  templateUrl: './inputbutton.component.html',
  styleUrls: ['./inputbutton.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Inputbutton {
  Search = Search;
 }
