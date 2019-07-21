import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/Forms';
import { ColorPickerModule } from 'ngx-color-picker';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleCompComponent } from './title-comp/title-comp.component';
import { BodyCompComponent } from './body-comp/body-comp.component';
import { ColorCompComponent } from './color-comp/color-comp.component';
import { PicCompComponent } from './pic-comp/pic-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleCompComponent,
    BodyCompComponent,
    ColorCompComponent,
    PicCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
