import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang-task';

  print: String;
  getValue(selected :String)
  {
    this.print=selected;
  }
}
