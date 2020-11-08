import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/service/authservice.service';
import { UserService } from '../../service/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  emailregEx = '\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b';

  loginformreactive = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.maxLength(20), Validators.pattern(this.emailregEx)]),
    password: new FormControl('')
  });

  
  showinput: boolean;


  constructor(private userservice: UserService, private authService: AuthserviceService, private router: Router) { }

  // userlogin: any = {
  //   email: '',
  //   password: ''
  // }

  showloginform: boolean = false

  ngOnInit(): void {


  }

  generateCtrl(e){
    if(e === '1'){
      this.showinput = true;
    }else if(e === '2'){
      this.showinput = false;
    }
  }

  login(): void{
    //console.log("Test", this.userlogin);

    console.log("reactive form value", this.loginformreactive.value)

    this.userservice.login(this).subscribe(success => {

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
