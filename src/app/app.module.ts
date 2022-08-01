import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ArtistAlbumComponent } from './artist-album/artist-album.component';
import { BrowsingArtistsComponent } from './browsing-artists/browsing-artists.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    ArtistAlbumComponent,
    BrowsingArtistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
