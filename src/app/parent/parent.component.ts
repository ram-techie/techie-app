import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit{
  title = 'techie-app';
  messageFromChild = null
  parentMessage = "Message from parent Component"
  constructor(){
  }
  ngOnInit(): void {
    
  }
  ShowMessage(message: any){
    this.messageFromChild = message
  }
}
