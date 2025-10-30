import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

@Component({
  selector: 'addbutton',
  imports: [],
  templateUrl: './addbutton.component.html',
  styleUrls: ['./addbutton.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Addbutton {
  title = input<string>('');
 }
