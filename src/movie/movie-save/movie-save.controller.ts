import { Body, Controller, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { MovieEntity } from '../entity/movie.entity';
import { MovieSaveService } from './movie-save.service';
import { MovieDto } from './entity/movie.dto';
import { AdminGuard } from '../../auth/admin/admin.guard';
import { User } from '../../auth/user.decorator';
import { UserEntity } from '../../auth/user.entity';

@Controller('/movie')
export class MovieSaveController {
  constructor(private readonly movieSaveService: MovieSaveService) {
  }

  @Post()
  @UsePipes(new ValidationPipe())
  save(@Body() movie: MovieDto): Promise<MovieEntity> {
    return this.movieSaveService.save(movie);
  }

  @Post('secure')
  @UsePipes(new ValidationPipe())
  saveSecure(@Body() movie: MovieDto,
             @User() user: UserEntity): Promise<MovieEntity> {
    console.log(user);
    return this.movieSaveService.save(movie);
  }

  @Post('admin')
  @UseGuards(AdminGuard)
  @UsePipes(new ValidationPipe())
  saveAdmin(@Body() movie: MovieDto,
            @User() user: UserEntity): Promise<MovieEntity> {
    console.log(user);
    return this.movieSaveService.save(movie);
  }
}
