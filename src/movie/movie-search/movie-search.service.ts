import { Component } from '@nestjs/common';
import { TheMovieDbEntity } from './entity/the-movie-db.entity';
import { Observable } from 'rxjs/Observable';

const api_key = '2ea07336a16963c373813aa61c2a76a5';

@Component()
export class MovieSearchService {
  searchForMovie(key: string, page: number): Observable<TheMovieDbEntity>{
    return Observable.create(observer => {
      const https = require('https');
      const options = {
        hostname: 'api.themoviedb.org',
        path: `/3/search/movie?api_key=${api_key}&page=${page}&query=${key}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const req = https.request(options, (res: any) => {
        res.setEncoding('utf8');
        res.on('data', (body: any) => {
          if (res.statusCode !== 200) {
            observer.error('Search failed');
            observer.complete();
          } else {
            observer.next(JSON.parse(body));
            observer.complete();
          }
        });
      });
      req.on('error', (e: any) => {
        observer.error('Search failed');
        observer.complete();
      });
      req.write('');
      req.end();
    });
  }
}
