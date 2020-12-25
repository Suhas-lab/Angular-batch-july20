import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private localLoginStatus = new Subject<boolean>()
  public loginRedirectUrl: string

  constructor() { }

  public setStatusLogin(name: any){
    this.localLoginStatus.next(name)
  }

  get isLoggedIn(): boolean{
    const token = localStorage.getItem('access_token');
    if (token && token !== null && token !== undefined){
      return true;
    } else {
      return false;
    }
  }
}
