import { CanActivateSingle } from './Services/singleMovieGuard.service';
import { AuthService } from './Services/authentication.service';

import { MovieDataService } from './Services/moviedata.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieRowComponent } from './movies/movie-row/movie-row.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { SingleMovieComponent } from './movies/single-movie/single-movie.component';

const appRoutes: Routes = [
 
    { path : '', redirectTo: '/movies', pathMatch: 'full'},
    { path : 'movies', component: MovieListComponent}, 
    { path : 'movies/:id', component : SingleMovieComponent},
    { path : 'hello', component: HeaderComponent}, 
    { path : 'callback', component: AuthCallbackComponent}, 
    
    
    

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieListComponent,
    MovieRowComponent,
    AuthCallbackComponent,
    SingleMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MovieDataService, AuthService, CanActivateSingle],
  bootstrap: [AppComponent]
})
export class AppModule { }
