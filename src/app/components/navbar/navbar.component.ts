import { AfterViewInit, Component, HostListener, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/service/authservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit, OnChanges {

  navbarOpen = false;
  public clicked = false;
  _el: any;
  toggleNavbar(){
    this.navbarOpen = !this.navbarOpen;
  }
  navFixed: boolean = false;
  private scrollOffset:number = 70;

  showhideLoginLogout: boolean;

  @HostListener('window:scroll')
  onWindowScroll(){
    this.navFixed = (window.pageYOffset 
      || document.documentElement.scrollTop 
      || document.body.scrollTop || 0
    ) > this.scrollOffset;
  }
  constructor(private router:Router, private authService:AuthserviceService) { }
  ngOnChanges():void{
    this.showhideLoginLogout = sessionStorage.getItem('isUserAuthenticated') ? true : false;
    console.log('showhideLoginLogout:hiding logout....... ',this.showhideLoginLogout)
  }
  ngAfterViewInit(){}
  ngOnInit(): void {
    // const localVal = localStorage.getItem("acces-token")
    // if (localVal !== null && localVal !== undefined){
    //   this.showhideLoginLogout = true;
    // }
    // const status = this.authService.isLoggedIn;
    const status = this.authService.isLoggedIn;
    console.log(sessionStorage.getItem('isUserAuthenticated'))
    this.showhideLoginLogout = sessionStorage.getItem('isUserAuthenticated') ? true : false;
    console.log('showhideLoginLogout:hiding logout....... ',this.showhideLoginLogout)

  }

  onClick(event): void{
    event.preventDefault();
    event.stopPropogation();
    this.clicked = true;
  }

  logOut(e){
    this.authService.setStatusLogin(false);
    localStorage.clear();
    sessionStorage.clear();
    this.showhideLoginLogout = false;
    this.router.navigate(['/']);
  }

  @HostListener('document:click', ['event'])
  private clickedOutside(event): void{
    if (this.clicked){
      this._el.nativeElement.querySelector('.dropdown-menu').classList.toggle('show');
    }
  }
}
