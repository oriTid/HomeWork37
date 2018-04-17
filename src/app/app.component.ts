import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  res2results : Array<string>;

  public passResults(res:Array<string>){
    this.res2results=res;

  }
}
