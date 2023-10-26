import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() message : string | undefined ;

  @Output() childOutputEvent = new EventEmitter
  messageToPatent = "Message from child Component"
  constructor(){

  }
  ngOnInit(): void {
    this.childOutputEvent.emit(this.messageToPatent);
  }

}
