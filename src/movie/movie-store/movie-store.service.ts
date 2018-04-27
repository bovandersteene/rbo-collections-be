import { Component } from '@nestjs/common';
import { MovieEntity } from '../entity/movie.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Component()
export class MovieStoreService {
  constructor(@InjectRepository(MovieEntity)
              private readonly movieRepsitory: Repository<MovieEntity>) {

  }

  async saveMovie(movie: MovieEntity): Promise<MovieEntity> {
    return await  this.movieRepsitory.save(movie);
  }
}

