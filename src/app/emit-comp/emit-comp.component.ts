import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-emit-comp',
  templateUrl: './emit-comp.component.html',
  styleUrls: ['./emit-comp.component.scss']
})
export class EmitCompComponent implements OnInit {

  constructor() { }
  @Output() messg = new EventEmitter();
  message = "Emitter to Messgae";
  ngOnInit() {
  }
  onClick() { 

    this.message = this.message;
    this.messg.emit(this.message);
}
}
