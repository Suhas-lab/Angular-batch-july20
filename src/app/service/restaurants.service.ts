import 'rxjs/add/operator/map';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationService } from './configuration.service';
import { CommonendpointService } from './common-end-point.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService{
  constructor(
      private configurations: ConfigurationService,
      private commonServiceEndpoint: CommonendpointService,
  ) { }

  getRestraurantList(modelObject: any): Observable<any> {
    //debugger;
    //return;
        return this.commonServiceEndpoint
            .getList(this.configurations.restaurantsUrl)
            .pipe(map(response => response as any));
  }

  postUserData(modelObject: any){
    return this.commonServiceEndpoint.getList(this.configurations.restaurantsUrl).pipe(map(response => response as any))
  }

  createUser(modalobject: any){
    return this.commonServiceEndpoint.getAllListEndpoint(modalobject, this.configurations.registerUrl).pipe(map(response => response as any))
  }

  loginUser(modalobject: any){
    return this.commonServiceEndpoint.getAllListEndpoint(modalobject, this.configurations.userloginUrl).pipe(map(response => response as any))
  }

}
