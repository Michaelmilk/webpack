import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';

// import '../../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../../node_modules/bootstrap/dist/js/bootstrap.js';
//use the package name directly, no need to use relative path
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
