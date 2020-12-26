import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import svgIcon from '@material-ui/core/Icon';
import { AuthserviceService } from 'src/app/service/authservice.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, AfterViewInit {

  navbarOpen = false;
  public clicked = false;
  _el: any;
  toggleNavbar() {
  this.navbarOpen = !this.navbarOpen;
  }

  navFixed: boolean = false;
  private scrollOffset: number = 70;
  
  @HostListener('window:scroll')
  onWindowScroll() {
    this.navFixed = (window.pageYOffset 
      || document.documentElement.scrollTop 
      || document.body.scrollTop || 0
    ) > this.scrollOffset;
  }

  constructor(private router: Router, private authService: AuthserviceService) { }

  showhideLoginlogout: boolean;

  ngAfterViewInit(){}
  ngOnInit(): void {

    const localval = localStorage.getItem("access_token");
    if(localval !== null && localval !== undefined){
      this.showhideLoginlogout = true;
    }

  }

  onClick(event): void {
    event.preventDefault();
    event.stopPropagation();
    this.clicked = true;
  }

  logOut(e){
    this.authService.setStatusLogin(false);
    localStorage.clear();
    this.router.navigate(['/']);
  }

  @HostListener('document:click', ['event'])

  private clickedOutside(event): void {
    if (this.clicked) {
    this._el.nativeElement.querySelector('.dropdown-menu').classList.toggle('show');
    }
  }
  
}
