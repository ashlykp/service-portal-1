import { Component, HostListener } from '@angular/core';
import { AuthenticationService } from './core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: boolean = false;
  [x: string]: any;
  title = 'emr-dashboard';
  username = '';
  showSubMenu: boolean = true;

  constructor(private authService: AuthenticationService, private router: Router) { }
  @HostListener('document:click', ['$event'])
  domClick(event: Event) {
    let flyoutEl = document.getElementById("user-icon");
    let targetEl = event.target; // clicked element

    if (targetEl !== flyoutEl) {
      this.showSubMenu = true;
    }
  }

  ngOnInit(): void {
    var loggedIn = sessionStorage.getItem('isLoggedin');
    if (loggedIn != null) {
      this.isLoggedIn = JSON.parse(loggedIn);
    }

    console.log(this.isLoggedIn, "LOGGED IN --------------------------->>>>>>")

  }

  // this.isLoggedIn = environment.skipLogin ? true : !!this.tokenStorageService.getToken();

  // this.isLoggedIn = true;

  //   if (this.isLoggedIn) {
  //     const user = this.tokenStorageService.getUser();
  //     this.username = user.username;
  //   }

  // }
  toggleSubMenu() {
    this.showSubMenu = !this.showSubMenu;
  }

  logout() {
    console.log("logout");
    sessionStorage.clear();
    document.cookie = 'id_token' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'jwt' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    this.authService.logout();
  }

}