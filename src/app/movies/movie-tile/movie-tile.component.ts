import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../movie';

@Component({
  selector: 'app-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.css']
})
export class MovieTileComponent implements OnInit {
  @Input() movie: Movie;

  posterUrl: string = "https://image.tmdb.org/t/p/w440_and_h660_bestv2/";
  
  constructor() { }

  ngOnInit() {
  }

}
