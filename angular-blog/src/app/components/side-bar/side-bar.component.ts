import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  itens: string[][] = [
    ["Buttons", "buttons.html"],
    ["Cards", "cards.html"]
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
