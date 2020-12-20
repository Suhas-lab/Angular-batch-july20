import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/service/authservice.service';
import { UserService } from '../../service/user.service'

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  constructor(private userservice: UserService, private authService: AuthserviceService, private router: Router) { }

  userlogin: any = {
    email: '',
    password: ''
  }

  ngOnInit(): void {
  }

  login(): void{
    console.log("Test", this.userlogin);

    this.userservice.login(this.userlogin).subscribe(success => {

        console.log("Response from api", success);

        this.authService.setStatusLogin(true);

        localStorage.setItem('access_token', success["token"]);

        this.router.navigate(['/restaurants']);

    },
    error => {
      console.log('Authentication failed');
      this.router.navigate(['/']);
      } 
    )

  }

}
