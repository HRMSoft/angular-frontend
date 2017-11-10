import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from "./module-import.guard";
import { AuthService } from "./services/auth.service";
import { AuthHttpService } from "./services/auth-http.service";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: [],
  providers: [
    AuthService,
    AuthHttpService,
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
