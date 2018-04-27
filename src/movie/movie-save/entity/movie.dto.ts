import { IsInt, IsOptional, IsString } from 'class-validator';

export class MovieDto {
  @IsInt()
  readonly id: number;
  @IsString()
  readonly title: string;
  @IsString({ always: false })
  @IsOptional()
  readonly poster_path: string;
  @IsString()
  @IsOptional()
  readonly overview: string;
}