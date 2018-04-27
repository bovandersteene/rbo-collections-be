import { Component } from '@nestjs/common';
import { MovieStoreService } from '../movie-store/movie-store.service';
import { MovieEntity } from '../entity/movie.entity';

@Component()
export class MovieSaveService {
  constructor(private readonly moviestore: MovieStoreService) {

  }

  save(movie: MovieEntity): Promise<MovieEntity> {
    return this.moviestore.saveMovie(movie);
  }
}
