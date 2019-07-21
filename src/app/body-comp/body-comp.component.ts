import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'body-comp',
  templateUrl: './body-comp.component.html',
  styleUrls: ['./body-comp.component.scss']
})
export class BodyCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 @Input() text:String;

}
