import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RestaurantsPageComponent } from './components/restaurants-page/restaurants-page.component';
import { FaouritePageComponent } from './components/faourite-page/faourite-page.component'
import { LoginUserComponent } from './components/login-user/login-user.component';
import { AuthGuardService } from './service/auth-guard.service'
import { RegistrationComponent } from './components/registration/registration.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
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
    pathMatch: 'full',
  },
  {
    path:'login',
    component: LoginUserComponent,
    pathMatch:'full' 
  },
  {
    path:'registration',
    component: RegistrationComponent,
    pathMatch: 'full'
  },
  {
    path:'todolist',
    component: TodoListComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true}), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
