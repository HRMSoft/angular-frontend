import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { environment } from "../../../environments/environment";

@Injectable()
export class AuthService {

  constructor(private http: Http) {
  }

  public register(username: string, password: string): Observable<any> {
    let body = {};

    return new Observable((observer) => {
      this.http.post(environment.apiUrl + "restaurants/register", body)
        .map((response: Response) => response.json())
        .subscribe(
          data => {
            observer.next(data);
          }, error => {
            observer.error(error);
          }, () => {
            observer.complete();
          });
    })
  }

  //
  // public logout(): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     const refreshToken: string = this.getRefreshToken();
  //
  //     const body = {
  //       client_id: "bkw_api_client_peko_key",
  //       grant_type: "delete_token",
  //       client_secret: "bkw_api_client_peko_secret",
  //       scope: "bkw_api_peko",
  //       refresh_token: refreshToken
  //     };
  //
  //     return this.http.post(this.configService.getConfig().logoutUrl, body)
  //     // Do anyway a logout and remove token and user from local storage
  //       .subscribe((data: any) => {
  //         localStorage.removeItem(AuthService.tokenKey);
  //         localStorage.removeItem(AuthService.userKey);
  //         resolve();
  //       }, error => {
  //         localStorage.removeItem(AuthService.tokenKey);
  //         localStorage.removeItem(AuthService.userKey);
  //         resolve();
  //       })
  //   });
  // }
  //
  // public getUserFromLocalStorage() {
  //   return JSON.parse(localStorage.getItem(AuthService.userKey));
  // }
  //
  // public isAuthenticated(): boolean {
  //   const jwt: string = localStorage.getItem(AuthService.tokenKey);
  //   const refreshToken = jwt ? this.jwtHelper.decodeToken(jwt).refresh_token : null;
  //
  //   return (jwt && refreshToken && this.accessTokenValid(jwt))
  // }
  //
  // public getAccessToken(): string {
  //   let jwt: string = localStorage.getItem(AuthService.tokenKey);
  //   return this.jwtHelper.decodeToken(jwt).access_token;
  // }
  //
  // private getRefreshToken(): string {
  //   let jwt: string = localStorage.getItem(AuthService.tokenKey);
  //   return this.jwtHelper.decodeToken(jwt).refresh_token;
  // }
  //
  // private setUserToLocalStorage(username: string, department: string) {
  //   localStorage.setItem(AuthService.userKey, JSON.stringify({username, department}));
  // }
  //
  // private accessTokenValid(jwt: string): boolean {
  //   if (jwt) {
  //     let decodedToken: any = this.jwtHelper.decodeToken(jwt);
  //     // UNIX Time (milliseconds)
  //     let expirationDate: number = parseInt(decodedToken.expiration) * 1000;
  //     // UNIX Time (milliseconds)
  //     let currentDate: number = new Date().getTime();
  //
  //     return (currentDate < expirationDate);
  //   } else {
  //     return false;
  //   }
  // }
}
