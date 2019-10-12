import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-counter-parent',
  templateUrl: './counter-parent.component.html',
  styleUrls: ['./counter-parent.component.scss']
})
export class CounterParentComponent implements OnInit {

  @ViewChild(CounterComponent, {static: false}) counterComponent:CounterComponent;

  increase(){
    this.counterComponent.increaseByOne();
  }
  decrease(){
    this.counterComponent.decreaseByOne();
  }
  constructor() { }

  ngOnInit() {
  }

}
