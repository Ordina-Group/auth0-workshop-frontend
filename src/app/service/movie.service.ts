import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    };
    return this.http.get(environment.apiUrl + '/movie', httpOptions);
  }

  getMovieById(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    };
    return this.http.get(environment.apiUrl + '/movie/' + id, httpOptions);
  }

  createMovie(name: string, image: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      })
    };

    const body = {
      'name': name,
      'imageUrl': image
    };

    return this.http.post(environment.apiUrl + '/movie', body, httpOptions);
  }
}
