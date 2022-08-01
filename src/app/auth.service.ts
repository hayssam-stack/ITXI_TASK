import { Injectable } from '@angular/core';
import { TokenService } from './_Tokens/token.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private tokenStorage: TokenService) { }

  getheaders() {
    const headers = { 'Authorization': 'Bearer ' + this.tokenStorage.getToken() }
    return headers;
  }

  getlogin() {
    var client_id = 'd654393509d247b8bb69c44126f7b9fe';
    var redirect_uri = 'http://localhost:4200/';
    var scope = 'user-read-private user-read-email';
    var url = 'https://accounts.spotify.com/authorize';
    var loginurl = url + '?client_id=' + client_id + '&response_type=token' + '&redirect_uri=' + redirect_uri + '&scope=' + scope;
    return loginurl;
  }
}
