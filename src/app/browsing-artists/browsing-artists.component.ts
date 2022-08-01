import { Component, OnInit } from '@angular/core';
import { TokenService } from '../_Tokens/token.service';
import { ActivatedRoute, Router } from '@angular/router'
import { ServicesService} from '../services.service'

@Component({
  selector: 'app-browsing-artists',
  templateUrl: './browsing-artists.component.html',
  styleUrls: ['./browsing-artists.component.css']
})
export class BrowsingArtistsComponent implements OnInit {
  token: any
  search_input: any
  collection: any = []
  constructor(private tokenStorage: TokenService, private router: Router, private auth: ServicesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.token = this.tokenStorage.getToken();
    this.search_input = this.activatedRoute.paramMap.subscribe(parameters => {

      this.search_input = parameters.get('data');

      const params = {
        'q': this.search_input,
        'type': "artist"
      }
      this.auth.get_Artists_list(params).subscribe((results: any) => {
        this.collection = results.artists.items
      },
      (err)=>{
        this.tokenStorage.delettoken();
        this.router.navigate([''])
      })
    })
    
  }
  onchange(value:any){
    this.search_input = value.target.value;
    this.router.navigate(['/artists/'+this.search_input])
   
  }
}
