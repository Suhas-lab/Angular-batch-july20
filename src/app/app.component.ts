import { Component, OnChanges, OnInit } from '@angular/core';
import { AuthserviceService } from './service/authservice.service';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges{
  title = 'login-auth-task';
  loginstatus:boolean;

  constructor(private authService: AuthserviceService){}

  ngOnChanges():void{
    this.loginstatus = sessionStorage.getItem('isUserAuthenticated') ? true : false;
    console.log('loginstatus:hiding logout....... ',this.loginstatus)
  }

  ngOnInit(){
    const status = this.authService.isLoggedIn;
    this.loginstatus = status;
    console.log("login status is: ", status)
  }
}
