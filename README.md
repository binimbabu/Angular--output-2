@Output

When child want to transmit a data to parent component we use @Output, here 'child' is the child component

child.component.ts

export class ChildComponent {
  @Output() sendDataEmitter: EventEmitter<any> = new EventEmitter();

  sendData(){
    this.sendDataEmitter.emit("Data from child component");
  }
}


child.component.html

<button (click)="sendData()">Send Data</button>



app.component.html

<app-child (sendDataEmitter)="receiveData($event)"></app-child>
<p> {{datatoParent}}</p>



here we pass the data through emitter  sendDataEmitter ( from child.component.ts to send data to parent) to a method in parent component ( i.e here receiveData($event) ) . Where $event will have the data from the child component which is passed to the method 'receiveData($event)' as a argument and this argument will be received in the parent component  ( that is app.component.ts) to variable datatoParent  .



app.component.ts

export class AppComponent {
  datatoParent: any;
  receiveData(childData: any) {
    this.datatoParent = childData;
  }
}



Another example

child.component.ts

export class ChildComponent {
  dataModel:any;
  @Output() sendDataEmitter: EventEmitter<any> = new EventEmitter();

  sendData(){
    this.sendDataEmitter.emit(this.dataModel);
  }
}


EventEmitter will trigger when emit happens for the @output variable 'sendDataEmitter' and this sendDataEmitter will be passed to parent component that is app.component.html ( like <app-child (sendDataEmitter)="receiveData($event)"></app-child> )


child.component.html


<input type="text" placeholder="Enter data" [(ngModel)]="dataModel"/>
<button (click)="sendData()">Send Data</button>


app.component.html

<app-child (sendDataEmitter)="receiveData($event)"></app-child>
<p> {{datatoParent}}</p>


app.component.ts

export class AppComponent {
  datatoParent: any;
  receiveData(childData: any) {
    this.datatoParent = childData;
  }
}

