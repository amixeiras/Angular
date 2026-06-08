import { Component } from '@angular/core';
import { PartialViewComponent } from '../partial-view/partial-view.component';

@Component({
  selector: 'app-content-link',
  standalone: true,
  imports: [ PartialViewComponent ],
  templateUrl: './content-link.component.html',
  styleUrl: './content-link.component.css'
})
export class ContentLinkComponent {

}
