import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import {UsersModule} from './users/users.module'

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent // so by command of creating component this "UserListComponent"
                      // is created on its own and also imported and declared.    
  ],
  imports: [
    BrowserModule,
    UsersModule     // here importing user module 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
