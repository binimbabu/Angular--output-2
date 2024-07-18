import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  dataModel:any;
  @Output() sendDataEmitter: EventEmitter<any> = new EventEmitter();

  sendData(){
    this.sendDataEmitter.emit(this.dataModel);
  }
}
