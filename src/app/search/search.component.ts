import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import {AuthService} from '../auth.service'
import {TokenService} from '../_Tokens/token.service'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search_input:any

  constructor( private router: Router, private auth: AuthService, private tokenservice: TokenService) { }

  ngOnInit(): void {
    
  }
  onchange(data:any) {
    this.search_input = data.target.value
      this.router.navigate(['artists/'+this.search_input])
  }
}
