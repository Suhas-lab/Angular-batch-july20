import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/service/authservice.service';
import { UserService } from 'src/app/service/user.service';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userservice: UserService, private authService: AuthserviceService, private router: Router) { }

  showhideLoginLogout:boolean;
  userlogin: any = {
    email: '',
    password: ''
  }

  ngOnInit(): void {
    const status = this.authService.isLoggedIn;
    this.showhideLoginLogout = status;
  }

  login(): void{
    console.log("Test", this.userlogin);

    this.userservice.login(this.userlogin).subscribe(success => {

        console.log("Response from api", success);

        this.authService.setStatusLogin(true);

        localStorage.setItem('access_token', success["token"]);

        this.showhideLoginLogout = true;
        if(this.showhideLoginLogout){
          sessionStorage.setItem('isUserAuthenticated', JSON.stringify(this.showhideLoginLogout))
        } else{
          sessionStorage.clearItem('isUserAuthenticated')
        }
        this.router.navigate(['/restaurants']);

      

    },
    error => {
      console.log('Authentication failed');
      this.router.navigate(['/']);
      } 
    )

  }
}
