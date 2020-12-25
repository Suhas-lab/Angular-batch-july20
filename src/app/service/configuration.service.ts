import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {


  public baseUrl: string = environment.API_URL;

  public get statsUrl(): string {
    return this.baseUrl + 'api/stats';
  }

  public get restaurantsUrl(): string {
    //return this.baseUrl + 'api/restaurants?city=toronto';
    return this.baseUrl + 'api/users';
  }

  public get unknownusersUrl(): string {
    return this.baseUrl + 'api/unknown';
  }

  public get citiesUrl(): string{
    return this.baseUrl + 'api/cities'
  }

  public get registerUrl(): string{
    return this.baseUrl + 'api/register'
  }

  public get userloginUrl(): string{
    return this.baseUrl + 'api/login'
  }


  constructor() { }
  
}
