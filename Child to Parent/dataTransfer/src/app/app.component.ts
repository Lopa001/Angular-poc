import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dataTransfer';
  data="x";
  updateData(item:string){
    console.warn(item)
    this.data=item;
  }
}
