import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.scss']
})
export class ChildCompComponent implements OnInit {
  name = 'Mumtaz';

  constructor() { }
  update() {
    alert(this.name);
    this.name = this.name;
  }

  ngOnInit() {
  }

}
