import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'pic-comp',
  templateUrl: './pic-comp.component.html',
  styleUrls: ['./pic-comp.component.scss']
})
export class PicCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  element: HTMLElement;
  @Input() url ;
 
}
