import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';
import { MovieSearchService } from './movie-search.service';
import { MovieSearchInterceptor } from './movie-search.interceptor';
import { MovieSearchRespone } from './entity/movie-search.entity';

@Controller('/movie/search')
export class MovieSearchController {

  constructor(private readonly movieSearchService: MovieSearchService) {
  }

  @Get()
  @UseInterceptors(MovieSearchInterceptor)
  searchFor(@Query('page') page: number = 1,
            @Query('q') key: string): Observable<MovieSearchRespone> {
    return this.movieSearchService.searchForMovie(key, page);
  }
}
