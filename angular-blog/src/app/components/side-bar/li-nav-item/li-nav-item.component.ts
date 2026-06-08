import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-li-nav-item',
  templateUrl: './li-nav-item.component.html',
  styleUrls: ['./li-nav-item.component.css']
})
export class LiNavItemComponent implements OnInit {

  @Input() nav_title: string = "";
  @Input() nav_link_icon: string = "";
  @Input() nav_collapse_header: string = "";
  @Input() nav_id: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
