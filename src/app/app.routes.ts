import { Routes } from "@angular/router";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { LoginComponent } from "./login/login.component";

export const appRoutes: Routes = [
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'login', component: LoginComponent},
  {
    path: '',
    redirectTo: '/restaurants',
    pathMatch: 'full'
  },
  {path: '**', component: RestaurantsComponent}
];
