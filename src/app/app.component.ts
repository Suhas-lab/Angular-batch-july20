import { Component, OnInit, ViewChild } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AuthserviceService } from './service/authservice.service';
import { LocalStorageService } from './service/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'front-end-test';

  loginstatus: boolean;

  @ViewChild(NavBarComponent) child;
  
  isUserLoggedIn: boolean;

  constructor(private authService: AuthserviceService, storageManager: LocalStorageService, ){
    const status = this.authService.isLoggedIn;
    this.loginstatus = status;

    storageManager.initialiseStorageSyncListener();
  }

  ngOnInit(){
    
  }  

  logOutUser(e):void{
    console.log("log out user");
    if (localStorage.length > 0) {
      localStorage.clear();
    }
    this.authService.logout();
    this.isUserLoggedIn = this.authService.isLoggedIn;

  }

}
