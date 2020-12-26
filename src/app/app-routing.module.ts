import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RestaurantsPageComponent } from './components/restaurants-page/restaurants-page.component';
import { FaouritePageComponent } from './components/faourite-page/faourite-page.component'
import { LoginUserComponent } from './components/login-user/login-user.component';
import{SuccesfullComponent} from './components/succesfull/succesfull.component';
import { AuthGuardService } from './service/auth-guard.service'

const routes: Routes = [
  {
    path: '',
    redirectTo: "login",
    pathMatch: 'full'
  },
  {
    path: 'restaurants',
    component: RestaurantsPageComponent,
    
    pathMatch: 'full'
  },
  {
    path: 'favourite-page',
    component: FaouritePageComponent,
    canActivate: [AuthGuardService],
    pathMatch: 'full',
    
  },
  {
    path:'login',
    component: LoginUserComponent,
    pathMatch:'full' 
  },
  {
    path:'succesfull',
    component:SuccesfullComponent,
    canActivate: [AuthGuardService],
    pathMatch:'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true}), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
