import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';

import { ConfigurationService } from './configuration.service';

@Injectable()
export class EndpointFactory {

    static readonly apiVersion: string = '1';

    private readonly userloginUrl: string = 'login';

    localAccesstoken: any;

    private get loginUrl() {
        return this.configurations.baseUrl + this.userloginUrl;
    }

    private taskPauser: Subject<any>;
    private isRefreshingLogin: boolean;


    constructor(
        protected http: HttpClient,
        protected configurations: ConfigurationService,
        private injector: Injector,
    ) {}

    protected handleError(error, continuation: () => Observable<any>) {
        if (error.status === 401) {

            this.isRefreshingLogin = true;

        }

        if (
            error.url &&
            error.url.toLowerCase().includes(this.loginUrl.toLowerCase())
        ) {

            return throwError(
                error.error && error.error.error_description
                    ? `session expired (${error.error.error_description})`
                    : 'session expired',
            );
        } else {
            return throwError(error);
        }
    }

    protected getRequestHeaders(): {
        headers: HttpHeaders;
    } {
        const headers = new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,POST,DELETE,PUT,OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Content-Type': 'application/json',
            'Accept': 'application/json , text/plain',
            'mode': 'no-cors',
            'Access-Control-Allow-Credentials': 'true'
        });

        return { headers };
    }
}
