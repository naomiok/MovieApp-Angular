import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterUserComponent } from './components/register-user/register-user.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './layouts/header/header.component';
import { MainComponent } from './layouts/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { WatchedComponent } from './components/watched/watched.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ResetComponent } from './components/reset/reset.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LogoutComponent } from './components/logout/logout.component';

import {SidebarModule} from 'ng-sidebar';
import { MovieComponent } from './component/movie/movie.component';
import { MovieListComponent } from './component/movie-list/movie-list.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    LoginComponent,
    HeaderComponent,
    MainComponent,
    HomeComponent,
    FavoritesComponent,
    WatchedComponent,
    ResetComponent,
    ViewProfileComponent,
    UpdateProfileComponent,
    SidenavComponent,
    MovieComponent,
    MovieListComponent,

    LogoutComponent,
    
   
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    SidebarModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
