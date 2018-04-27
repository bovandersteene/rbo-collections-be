import { Module } from '@nestjs/common';
import { MovieSearchModule } from './movie-search/movie-search.module';
import { MovieSaveModule } from './movie-save/movie-save.module';
import { MovieStoreService } from './movie-store/movie-store.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieEntity } from './entity/movie.entity';

@Module({
  imports: [
    MovieSearchModule,
    MovieSaveModule,
  ],
  components: [
  ],
})
export class MovieModule {}
