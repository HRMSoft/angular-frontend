import { Routes } from "@angular/router";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./core/guards/auth.guard";

export const appRoutes: Routes = [
  {path: 'restaurants', component: RestaurantsComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {
    path: '',
    redirectTo: '/restaurants',
    pathMatch: 'full'
  },
  {path: '**', component: RestaurantsComponent}
];
