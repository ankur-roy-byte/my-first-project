import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Events';
  
constructor(){
  this.myfunction(25,5);
}
  myfunction(data,arg2){
      let sum = data+arg2;
      let subs = data- arg2;
      let mul = data*arg2;
      let div = data/arg2;
      let reminder = data % arg2;

      console.log("my sum is",sum);
  }
  // ngOndestroy(){

  // }
}
