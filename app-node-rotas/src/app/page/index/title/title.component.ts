import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {
  constructor(private parameters: ActivatedRoute) {

    this.parameters.queryParams.subscribe(value => {
      if(Object.keys(value).length != 0){
        console.log(value);
      }
    })


  }
}
