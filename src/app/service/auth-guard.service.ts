
import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Router, RouterStateSnapshot, Route } from '@angular/router';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad{

  constructor(
    private route: ActivatedRoute,
    private authService:AuthserviceService,
    private router: Router
  ) { }

  canActivate(
    route?: ActivatedRouteSnapshot,
    state?: RouterStateSnapshot,
  ): boolean {
    if (!this.authService.isLoggedIn){
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean{
    return this.canActivate();
  }

  canLoad(route: Route): boolean{
    const url = `/${route.path}`;
    return this.checkLogin(url);
  }


  checkLogin(url: string): boolean{
    if (this.authService.isLoggedIn){
      return true;
    }
    this.authService.loginRedirectUrl = url;
    this.router.navigate(['/']);
    return false;
  }

}
