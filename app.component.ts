import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  stepper } from './route-animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    
    
    stepper,
  ]

})
export class AppComponent {
  title = 'my-resume-project';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
