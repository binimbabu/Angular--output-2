import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  datatoParent: any;
  receiveData(childData: any) {
    this.datatoParent = childData;
  }
}
