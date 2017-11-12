import { Injectable } from "@angular/core";
import { AuthHttpService } from "./auth-http.service";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs/Observable";

@Injectable()
export class RestaurantsService {

  constructor(private authHttp: AuthHttpService) {
  }

  public getRestaurantProfile(): Observable<any> {
    return this.authHttp.get(environment.apiUrl + "restaurants/profile");
  }
}
