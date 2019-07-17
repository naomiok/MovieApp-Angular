import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { HomeComponent } from './components/home/home.component';
import { WatchedComponent } from './components/watched/watched.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ResetComponent } from './components/reset/reset.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { LogoutComponent } from './components/logout/logout.component';


const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'register', component:RegisterUserComponent},
  {path:'logout', component:LogoutComponent},
  {path:'home', component:HomeComponent},
  {path:'favorites', component:FavoritesComponent},
  {path:'watched', component:WatchedComponent},
  {path:'reset', component:ResetComponent},
  {path:'view-profile', component:ViewProfileComponent},
  {path:'update-profile', component:UpdateProfileComponent},
  {path:'', redirectTo: 'login', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
