import { Module } from '@nestjs/common';
import { MovieSaveController } from './movie-save.controller';
import { MovieSaveService } from './movie-save.service';
import { MovieEntity } from '../entity/movie.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieStoreService } from '../movie-store/movie-store.service';

@Module({
  imports: [TypeOrmModule.forFeature([MovieEntity])],
  controllers: [
    MovieSaveController,
  ],
  components: [
    MovieStoreService,
    MovieSaveService,
  ],
})
export class MovieSaveModule {
}
