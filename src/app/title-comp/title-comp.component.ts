import { Component, OnInit, Output ,EventEmitter,Input} from '@angular/core';

@Component({
  selector: 'title-comp',
  templateUrl: './title-comp.component.html',
  styleUrls: ['./title-comp.component.scss']
})
export class TitleCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
@Input() tit: String;

}
