import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesComponent }  from './movies.component';
import { MovieTileComponent } from './movie-tile/movie-tile.component';

@NgModule({
  declarations: [
    MoviesComponent, MovieTileComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MoviesComponent
  ],
  providers: []
})
export class MoviesModule { }
