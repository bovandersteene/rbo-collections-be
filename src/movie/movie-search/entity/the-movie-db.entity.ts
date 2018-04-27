export interface TheMovieDbEntity {
  page: number;
  total_results: number;
  total_pages: number;
  results: TmbMovie[];
}

export interface TmbMovie {
  vote_count: number;
  id: number;
  video: boolean;
  vote_average: number;
  title: string;
  popularity: number;
  poster_path: string | null;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  backdrop_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
}
