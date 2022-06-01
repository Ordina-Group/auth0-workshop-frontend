import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../../service/movie.service';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: [
  ]
})
export class MovieComponent implements OnInit {

  movies$: Observable<any>;
  name: string;
  image: string;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.movies$ = this.movieService.getMovies()
      .pipe(finalize(() => {
        console.log('done');
      }));
  }

  createNewMovie() {
    this.movieService.createMovie(this.name, this.image).subscribe(data => {
      this.name = '';
      this.image = '';
      this.getMovies();
    }, err => {
      console.error(err);
    });
  }
}
