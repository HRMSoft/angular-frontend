import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from "./guards/module-import.guard";
import { AuthService } from "./services/auth.service";
import { AuthHttpService } from "./services/auth-http.service";
import { AuthGuard } from "./guards/auth.guard";
import { RestaurantsService } from "./services/restaurants.service";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: [],
  providers: [
    AuthService,
    AuthHttpService,
    AuthGuard,
    RestaurantsService,
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
