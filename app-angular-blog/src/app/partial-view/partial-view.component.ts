import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-partial-view',
  standalone: true,
  imports: [],
  templateUrl: './partial-view.component.html',
  styleUrl: './partial-view.component.css'
})
export class PartialViewComponent {
  @Input() src_link: string = '';
  @Input() src_title: string = '';
}
