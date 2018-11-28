import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieService } from './movie.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailComponent,
  ],
  imports: [
    BrowserModule,
    MoviesModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
