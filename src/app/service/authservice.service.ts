import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { LocalStorageService } from './local-storage.service';
import { EndpointFactory } from './endpointfactory_service';
import { ConfigurationService } from './configuration.service';
import { DBkeys } from './db-keys';
import { Utilities } from './utilities';
import { User, Role } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private localLoginStatus = new Subject<boolean>();
  public loginRedirectUrl: string;

  constructor(private localStorage: LocalStorageService) { }

  public setStatusLogin(name: any) {
    this.localLoginStatus.next(name);
  }

  get isLoggedIn(): boolean {
    const token = localStorage.getItem('access_token');
    if (token && token !== null && token !== undefined) {
        return true;
    } else {
        return false;
    }
  }

  logout(): void {
    this.localStorage.deleteData(DBkeys.ACCESS_TOKEN);
  }

}
