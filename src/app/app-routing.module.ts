import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {SearchComponent} from './search/search.component'
import {BrowsingArtistsComponent} from './browsing-artists/browsing-artists.component'
import {ArtistAlbumComponent} from './artist-album/artist-album.component'


const routes: Routes = [
  {
    component: LoginComponent,
    path: ''
  },
  {
    component: SearchComponent,
    path: 'search'
  },
  {
    component: BrowsingArtistsComponent,
    path: 'artists/:data'
  },
  {
    component:ArtistAlbumComponent,
    path: 'album/:id'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
