import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MusicModule } from './music/music.module';
import { MovieModule } from './movie/movie.module';
import { BookModule } from './book/book.module';
import { AuthModule } from './auth/auth.module';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieEntity } from './movie/entity/movie.entity';

const entities = [MovieEntity];
const local: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'yourpassword',
  database: 'rbo_collection',
  entities,
  synchronize: false,
  entityPrefix: 'coll_',
  logging: false,
};

@Module({
  imports: [TypeOrmModule.forRoot(local), MusicModule, MovieModule, BookModule, AuthModule],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule {}
