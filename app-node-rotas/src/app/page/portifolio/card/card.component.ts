import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor(private parameters: ActivatedRoute, private redirecionar: Router) {

    //http://localhost:4200/card/1
    debugger

     this.parameters.firstChild?.params.subscribe(value => {
        
     });

    setInterval(() => {
      this.redirecionar.navigate(['/'])
    }, 5000);
  }

  
}
