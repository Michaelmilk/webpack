import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

import '../assets/css/styles.css';
// import '../assets/css/AdminLTE.css';
// import '../assets/css/_all-skins.css';
//import '../assets/css/side-bar.css';
//import '../assets/sass/test.scss';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
    private sub: any;
    
    constructor(private slimLoader: SlimLoadingBarService, 
        private router: Router) { 
        //this.startLoading(); 
        // Listen the navigation events to start or complete the slim bar loading
        this.sub = this.router.events.subscribe(event => {
        if (event instanceof NavigationStart) {
            this.slimLoader.start();
        } else if ( event instanceof NavigationEnd ||
                    event instanceof NavigationCancel ||
                    event instanceof NavigationError) {
            this.slimLoader.complete();
        }
        }, (error: any) => {
            this.slimLoader.complete();
        });
    }

    ngOnDestroy(): any {
        this.sub.unsubscribe();
    }
  
    startLoading() {
        this.slimLoader.start(() => {
            console.log('Loading complete');
        });
    }

    stopLoading() {
        this.slimLoader.stop();
    }

    completeLoading() {
        this.slimLoader.complete();
    }
}
