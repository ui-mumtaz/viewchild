import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  message:string = '';
  count: number = 0;

  constructor() { }
  increaseByOne(){
    this.count = this.count + 1;
    this.message = "counter: " + this.count;
  }
  decreaseByOne(){
    this.count = this.count - 1;
    this.message = "counter: " + this.count;
  }
  ngOnInit() {
  }

}
