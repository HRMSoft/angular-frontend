import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatButtonModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RouterModule } from "@angular/router";
import { appRoutes } from "./app.routes";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    CoreModule,
    SharedModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
