import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My app works!';
  isAuth: Boolean = false;

  appareils = [
    {
      name : 'Machine à laver',
      status: 'éteint'
    },
    {
      name : 'Réfrigérateur',
      status: 'éteint'
    },
    {
      name : 'Ordinateur',
      status: 'éteint'
    }
  ];

  constructor(){

    setTimeout(
      ()=> {this.isAuth= true;}, 4000
    );
  }

  onAllumerTout(){

  }

}
