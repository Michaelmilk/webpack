import { Component } from '@angular/core';

import '../assets/css/styles.css';
import '../assets/css/_all-skins.css';
import '../assets/css/AdminLTE.css';
//import '../assets/css/side-bar.css';
//import '../assets/sass/test.scss';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isClicked: boolean;

  constructor(){
    this.isClicked = false;
  }

  collapseSideBar(){
    this.isClicked = !this.isClicked;
    console.log('isclicked', this.isClicked);
  }
}
