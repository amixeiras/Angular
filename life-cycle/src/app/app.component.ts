import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'life-cycle';
  isAliveCheckSample: boolean = true;

  disposeChekSample(): void{
    this.isAliveCheckSample = false;
  }

  openChekSample(): void {
    this.isAliveCheckSample = true;
  }
}
