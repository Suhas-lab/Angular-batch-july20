import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from './service/authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'front-end-test';

  loginstatus: boolean;

  constructor(private authservice: AuthserviceService){

  }

  ngOnInit(){
    const status = this.authservice.isLoggedIn;
    this.loginstatus = status;
    console.log("login status", status);
  }  

}
