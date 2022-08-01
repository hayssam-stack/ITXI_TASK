import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { TokenService } from '../_Tokens/token.service'
import { AuthService } from '../auth.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn = false
  loginurl: any;

  constructor(private tokenStorage: TokenService, private router: Router,
    private auth: AuthService) { }

  ngOnInit(): void {
    this.loginurl = this.auth.getlogin();
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorage.getToken();
      this.router.navigate(['search']);
    }
    else {
      const queryString = window.location.hash.substr(1);
      const urlParams = new URLSearchParams(queryString);
      const paramValue: any = urlParams.get('access_token');
      if (paramValue != null) {
        this.tokenStorage.saveToken(paramValue)
        this.router.navigate(['search'])
      }
    }
  }
}
