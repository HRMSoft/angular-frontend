import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { environment } from "../../../environments/environment";
import { JwtHelper } from "angular2-jwt";

@Injectable()
export class AuthService {
  public static readonly jwtKey: string = "ra-jwt";
  public static readonly restaurantKey: string = "ra-restaurant";

  constructor(private http: Http,
              private jwtHelper: JwtHelper) {
  }

  public register(name: string, password: string, location: string, food: string): Observable<any> {
    const body = {name, password, location, food};

    console.log("body", body);

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

  public login(name: string, password: string): Observable<any> {
    const body = {name, password};

    return new Observable((observer) => {
      this.http.post(environment.apiUrl + "restaurants/authenticate", body)
        .map((response: Response) => response.json())
        .subscribe(
          data => {
            localStorage.setItem(AuthService.jwtKey, data.token.substring(3));
            localStorage.setItem(AuthService.restaurantKey, JSON.stringify(data.restaurant));
            observer.next(data);
          }, error => {
            observer.error(error);
          }, () => {
            observer.complete();
          });
    });
  }

  public getRestaurantFromLocalStorage() {
    return JSON.parse(localStorage.getItem(AuthService.restaurantKey));
  }

  public isAuthenticated(): boolean {
    const jwt: string = localStorage.getItem(AuthService.jwtKey);

    if (jwt) {
      const decodedToken: any = this.jwtHelper.decodeToken(jwt);
      // UNIX Time (milliseconds)
      const expirationDate: number = parseInt(decodedToken.exp) * 1000;
      // UNIX Time (milliseconds)
      const currentDate: number = new Date().getTime();

      return (currentDate < expirationDate);
    } else {
      return false;
    }
  }

  public logout(){
    localStorage.removeItem(AuthService.jwtKey);
    localStorage.removeItem(AuthService.restaurantKey);
  }
}
