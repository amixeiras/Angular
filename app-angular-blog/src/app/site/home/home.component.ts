import { Component } from '@angular/core';
import { TitleComponent } from '../../title/title.component';
import { BigCardComponent } from '../../big-card/big-card.component';
import { SmallCardComponent } from '../../small-card/small-card.component';
import { MenuBarComponent } from '../../menu-bar/menu-bar.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TitleComponent, BigCardComponent, SmallCardComponent, MenuBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
