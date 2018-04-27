import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('movies')
export class MovieEntity {
  @PrimaryColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  poster_path: string;
  @Column()
  overview: string;
}