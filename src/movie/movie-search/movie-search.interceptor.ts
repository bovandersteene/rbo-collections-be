import { ExecutionContext, Interceptor, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';
import { TheMovieDbEntity, TmbMovie } from './entity/the-movie-db.entity';
import { MovieSearch, MovieSearchRespone } from './entity/movie-search.entity';
import { map, tap } from 'rxjs/operators';

@Interceptor()
export class MovieSearchInterceptor implements NestInterceptor {
  intercept(dataOrRequest, context: ExecutionContext, stream$: Observable<TheMovieDbEntity>): Observable<MovieSearchRespone> {
    return stream$.pipe(
      map(response => ({
        ...response,
        results: response.results.map(movie => this.mapMovie(movie)),
      })),
    );
  }

  private mapMovie(movie: TmbMovie): MovieSearch {
    const {
      id, title, poster_path, overview,
    } = movie;
    return {
      id, title, poster_path, overview,
    };
  }

}
