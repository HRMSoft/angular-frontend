import { Component } from '@angular/core';
import { AuthService } from "./core/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  public logout() {
    this.authService.logout();
    this.router.navigate(["login"]);
  }

  public isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  public login() {
    this.router.navigate(["login"]);
  }

  public isOnLoginPage(): boolean {
    return this.router.url === '/login';
  }
}
