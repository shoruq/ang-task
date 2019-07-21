import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Build your own alert';
  color = 'maroon';
  color2= 'white';

  t :string;
  body :string;
  ur : string;
  h: boolean =true;
  inputT:string;
  helement: HTMLElement;


  send1(){
    this.helement=document.getElementById('pic1') as HTMLElement;
     this.ur = this.helement.src;
    
   }
   send2(){
     this.helement=document.getElementById('pic2') as HTMLElement;
      this.ur =this.helement.src;
      
    }
    send3(){
     this.helement=document.getElementById('pic3') as HTMLElement;
      this.ur = this.helement.src;
    }

    setMyStyle() {
      let styles = {
        
        'background': 'linear-gradient(' + this.color+','+ this.color2 + ')',
        
      };
    
      
    
      return styles;
    }
  

}
