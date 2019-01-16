import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {UsersService} from './users.service';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
export function get_settings(usersService: UsersService) {
  return () => usersService;
}

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
  ],
  providers: [UsersService,  {provide: LocationStrategy, useClass: HashLocationStrategy},{
    provide: APP_INITIALIZER,
    useFactory: get_settings,
    deps: [UsersService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
