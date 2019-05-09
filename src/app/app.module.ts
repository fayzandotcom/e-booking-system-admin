import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { UserComponent } from './user/user.component';
import { LookupModule } from './lookup/lookup.module';

import { appRoutes } from './router-config';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { SanitizePipe } from './sanitize.pipe';
import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { AmazingTimePickerModule } from 'amazing-time-picker';

@NgModule({
  // components register here
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RoomComponent,
    UserComponent,
    RoomDetailComponent,
    SanitizePipe
  ],
  // modules register here
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    LookupModule,
    DateValueAccessorModule,
    AmazingTimePickerModule
  ],
  // services register here
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
