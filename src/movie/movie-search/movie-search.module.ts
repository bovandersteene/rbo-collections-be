import { Module } from '@nestjs/common';
import { MovieSearchService } from './movie-search.service';
import { MovieSearchController } from './movie-search.controller';

@Module({
  controllers: [MovieSearchController],
  components: [MovieSearchService],
})
export class MovieSearchModule {
}
