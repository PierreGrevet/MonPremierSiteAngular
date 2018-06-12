import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mon-premier',
  templateUrl: './mon-premier.component.html',
  styleUrls: ['./mon-premier.component.css']
})
export class MonPremierComponent implements OnInit {

  @Input() appareilName: string;
  appareilStatus = 'éteint';
  disableBouton: Boolean = true;
  follow(){
    this.disableBouton= !this.disableBouton;
  }
  constructor() { }

  ngOnInit() {
  }

  getStatus(){
    return this.appareilStatus;
  }

  onSwitch(){
    this.appareilStatus = this.appareilStatus === 'éteint' ? 'allumer' : 'éteint';
  }

  getTextButton(): string {
    return this.appareilStatus === 'éteint' ? 'Allumer' : "Eteindre";
  }

  getColor(): string{
    if (this.appareilStatus === 'éteint') {
      return 'red';
    }

    return 'green';
  }
}
