import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FavoratePageComponent } from './components/favorate-page/favorate-page.component';
import { LoginComponent } from './components/login/login.component';
import { RestaurantPageComponent } from './components/restaurant-page/restaurant-page.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'restaurants',
    component:RestaurantPageComponent,
    canActivate: [AuthGuardService],
    pathMatch:'full'
  },
  {
    path:'favorate-page',
    component:FavoratePageComponent,
    canActivate: [AuthGuardService],
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true}), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
