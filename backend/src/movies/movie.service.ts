import { Injectable, NotFoundException } from '@nestjs/common';
import { title } from 'process';

@Injectable()
export class MovieService {
  private movies = [
      {
        id: 1,
        title: 'Intersteller',
        year: 2014,
      },
      {
        id: 2,
        title: 'Inception',
        year: 2010,
      },
      {
        id: 3,
        title: 'The Dark Knight',
        year: 2010,
      },
    ];
  
    getMovies() {
      return this.movies;
    }

  getMovie(id: string) {
    const movies = this.getMovies();

    const movie = movies.find((movie) => movie.id === Number(id));

    if (!movie) {
      throw new NotFoundException('Movie not found');
    }

    return movie;
  }

  createMovie(body: any) {
    const movie = {
      id: this.movies.length + 1,
      title: body.title,
      year: body.year,
    }

    this.movies.push(movie);

    return movie;
  }

  updateMovie(id: string, body: any) {
    const movie = this.movies.find((movie) => movie.id === Number(id));

    if (!movie) {
      throw new NotFoundException('Movie not found');
    }

    movie.title = body.title;
    movie.year = body.year;

    return movie;
  }
}
