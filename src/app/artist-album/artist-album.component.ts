import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services.service'
import { TokenService } from '../_Tokens/token.service'

@Component({
  selector: 'app-artist-album',
  templateUrl: './artist-album.component.html',
  styleUrls: ['./artist-album.component.css']
})
export class ArtistAlbumComponent implements OnInit {
  artist_id: any
  collection: any = []
  artist_name: any

  constructor(private router: Router, private auth: ServicesService, private activatedroute: ActivatedRoute, private tokenservice: TokenService) { }

  ngOnInit(): void {
    this.artist_id = this.activatedroute.paramMap.subscribe(params => {
      this.artist_id = params.get('id');
      this.artist_id = this.artist_id.substr(15);
      this.auth.get_Artist_album(this.artist_id).subscribe((results: any) => {
        this.collection = results.items
        this.artist_name = results.items[0].artists[0].name
      },
        (err) => {
          this.tokenservice.delettoken();
          this.router.navigate(['']);
        }
      )
    });
  }
}
