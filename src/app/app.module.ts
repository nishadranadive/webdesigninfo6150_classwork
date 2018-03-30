import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { EmitCompComponent } from './emit-comp/emit-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    EmitCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
