import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from './configuration.service';
import { EndpointFactory} from './endpointfactory_service'
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonendpointService extends EndpointFactory{
  constructor(
      http: HttpClient,
      configurations: ConfigurationService,
      injector: Injector,
  ) {
      super(http, configurations, injector);
   }

   getList<T>(url: string): Observable<T> {
    debugger;
    const endpointUrl = `${url}`;
    //return;
    return this.http.get<T>(endpointUrl, this.getRequestHeaders()).pipe<T>(
        catchError(error => {
            return this.handleError(error.error, () =>
                this.getList(endpointUrl),
            );
        }),
    );
}

getAllListEndpoint<T>(modelObject: any, url: string): Observable<T> {
  const endpointUrl = `${url}`;
  return this.http
      .post<T>(
          endpointUrl,
          JSON.stringify(modelObject),
          this.getRequestHeaders(),
      )
      .pipe<T>(
          catchError(error => {
              return this.handleError(error.error, () =>
                  this.getAllListEndpoint(modelObject, url),
              );
          }),
      );
}

getLoginEndpoint<T>(modelObject: any, url: string): Observable<T>{
    const loginurl = `${url}`;
    return this.http.post<T>(loginurl, JSON.stringify(modelObject),
    this.getRequestHeaders()).pipe<T>(
        catchError(error => {
            return this.handleError(error.error, () =>
                  this.getAllListEndpoint(modelObject, url),
              ); 
        })
    )
}

}
