import 'rxjs/add/operator/map';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ConfigurationService } from './configuration.service';
import { CommonendpointService } from './commonendpoint.service';

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
            .map(response => response as any);
  }

  postUserData(modelObject: any){
    return this.commonServiceEndpoint.getList(this.configurations.restaurantsUrl).map(response => response as any)
  }

  createUser(modalobject: any){
    return this.commonServiceEndpoint.getAllListEndpoint(modalobject, this.configurations.registerUrl).map(response => response as any)
  }

  loginUser(modalobject: any){
    return this.commonServiceEndpoint.getAllListEndpoint(modalobject, this.configurations.userloginUrl).map(response => response as any)
  }

}
