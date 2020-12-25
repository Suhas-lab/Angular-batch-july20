import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CommonendpointService } from './common-end-point.service';
import { ConfigurationService } from './configuration.service';
import { LocalStorageService } from './local-storage.service';
import { UserInterface, User } from '../models/user.model';
import { DBkeys } from './db-keys';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private common: CommonendpointService, private configurations:  ConfigurationService, private localStorage: LocalStorageService) { }

  private previousIsLoggedInCheck = false;
  private loginLocalStatus = new Subject<boolean>()

  logOut(){

  }

  get isLoggedIn(): boolean {
    return this.currentUser != null;
  }

  get currentUser(): User {
    const user = this.localStorage.getDataObject<User>(DBkeys.CURRENT_USER);
    this.reevaluateLoginStatus(user);
    return user;
  }

  private reevaluateLoginStatus(currentUser?: User){
    const user = currentUser || this.localStorage.getDataObject<User>(DBkeys.CURRENT_USER);
    const isLoggedIn = user != null;

    if (this.previousIsLoggedInCheck !== isLoggedIn) {
        setTimeout(() => {
            this.loginLocalStatus.next(isLoggedIn);
        });
    }

    this.previousIsLoggedInCheck = isLoggedIn;
  }

  login(userRequest: any){
    if(this.isLoggedIn){
      this.logOut();
    }
    return this.common.getLoginEndpoint<UserInterface>(
                userRequest,
                this.configurations.userloginUrl,
            )
            .pipe(
              map(response => {
                return response;
            })
            )
  }
}
