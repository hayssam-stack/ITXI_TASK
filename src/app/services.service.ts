import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import  {AuthService} from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  base_authorize_url = 'https://accounts.spotify.com/authorize/';
  client_id = 'd654393509d247b8bb69c44126f7b9fe';
  redirect_uri = 'http://localhost:4200/';
  scope = 'user-read-private user-read-email';

  base_url_search = 'https://api.spotify.com/v1/search'
  base_url_album = 'https://api.spotify.com/v1/artists/'
  
  constructor(private http: HttpClient,private auth: AuthService) { }

  get_Artists_list(params:any){
    const headers = this.auth.getheaders();
    return this.http.get(this.base_url_search,{params,headers})
  }

  get_Artist_album(id:any){
    const headers = this.auth.getheaders();
    return this.http.get(this.base_url_album+id+'/albums',{headers})
  }

  get_search_names(data:any){
    const params = {
      'q': data,
      'type': "artist"
    }
    const headers = this.auth.getheaders();
    return this.http.get(this.base_url_search,{params,headers})
  }

}