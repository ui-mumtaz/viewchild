import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChildCompComponent } from '../child-comp/child-comp.component';

@Component({
  selector: 'parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.scss']
})
export class ParentCompComponent implements OnInit {
  username = 'Sami';
  @ViewChild('box', {static: false}) box:ElementRef;
  @ViewChild(ChildCompComponent, {static: false}) child:ChildCompComponent;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    console.log(this.child);
    this.box.nativeElement.style.backgroundColor = "blue";
    this.box.nativeElement.classList = "boxblue";

   
  }
  changeChildProperty(){
    this.child.name = this.username;
  }
  callChildMethod(){
    this.child.update();
  }

}
