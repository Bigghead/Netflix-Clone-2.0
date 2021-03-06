import { DropdownDirective } from './Directive/dropdown.directive';
import { TruncateStringPipe } from './Pipes/truncate-string.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieRowComponent } from './movies/movie-row/movie-row.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { SingleMovieComponent } from './movies/single-movie/single-movie.component';
import { UserFavoritesComponent } from './movies/user-favorites/user-favorites.component';
import { UserSettingsComponent } from './user/user-settings/user-settings.component';
import { SearchListComponent } from './movies/search-list/search-list.component';

import { AuthService } from './Services/authentication.service';
import { CanActivateRoute } from './Services/singleMovieGuard.service';
import { MovieDataService } from './Services/moviedata.service';
import { StaticBannerComponent } from './movies/movie-list/static-banner/static-banner.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';

const appRoutes: Routes = [
 
    { path : '', redirectTo: '/', pathMatch: 'full'},
    { path : '', component: MovieListComponent}, 
    { path : 'search/:searchTerm', component : SearchListComponent},  
    { path : 'search/:media_type/:id', component : SingleMovieComponent},          
    { path : 'user/:id', component : UserSettingsComponent, canActivate:[CanActivateRoute]},  
    { path : 'user/:id/edit', component : UserUpdateComponent, canActivate:[CanActivateRoute]},          
    { path : ':media_type/:id', component : SingleMovieComponent},
    // { path : 'hello', component: HeaderComponent}, 
    { path : 'callback', component: AuthCallbackComponent}, 
    
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieListComponent,
    MovieRowComponent,
    AuthCallbackComponent,
    SingleMovieComponent,
    UserFavoritesComponent,
    UserSettingsComponent,
    SearchListComponent,
    TruncateStringPipe,
    DropdownDirective,
    StaticBannerComponent,
    UserUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MovieDataService, AuthService, CanActivateRoute],
  bootstrap: [AppComponent]
})
export class AppModule { }
