import { Component } from '@angular/core';
import { AuthService } from './auth.service';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'onLineForBussinesses';
  
  constructor(public userService:AuthService)
  {

  }

}
