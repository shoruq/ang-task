import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'title-comp',
  templateUrl: './title-comp.component.html',
  styleUrls: ['./title-comp.component.scss']
})
export class TitleCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  maint:any;

  @Output() mainTitle=new EventEmitter<string>();

  send()
  {
      this.mainTitle.emit(this.maint);
  
 
  }

}
