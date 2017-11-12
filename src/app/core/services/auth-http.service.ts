import { Injectable } from "@angular/core";
import { Http, Headers, Response, RequestOptionsArgs } from "@angular/http";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthHttpService {

  constructor(private http: Http) {
  }

  public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    const observable = new Observable((observer) => {
      this.http.get(url, this.addAuthHeader(options))
        .subscribe(
          data => {
            observer.next(data);
          },
          error => {
            observer.error(error);
          },
          () => {
            observer.complete();
          }
        );
    });
    return observable;
  }

  public post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    const observable = new Observable((observer) => {
      this.http.post(url, body, this.addAuthHeader(options))
        .subscribe(
          data => {
            observer.next(data);
          },
          error => {
            observer.error(error);
          },
          () => {
            observer.complete();
          }
        );
    });
    return observable;
  }

  public put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    const observable = new Observable((observer) => {
      this.http.put(url, body, this.addAuthHeader(options))
        .subscribe(
          data => {
            observer.next(data);
          },
          error => {
            observer.error(error);
          },
          () => {
            observer.complete();
          }
        );
    });
    return observable;
  }

  private addAuthHeader(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (!options) {
      options = {};
      options.headers = new Headers();
    } else if (!options.headers) {
      options.headers = new Headers();
    }

    const accessToken = localStorage.getItem(AuthService.jwtKey);
    const headers = options.headers;
    headers.set("Authorization", "JWT " + accessToken);

    return options;
  }
}

