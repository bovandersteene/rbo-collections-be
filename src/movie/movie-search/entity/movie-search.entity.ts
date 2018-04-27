export interface MovieSearchRespone {
  page: number;
  total_results: number;
  total_pages: number;
  results: MovieSearch[];
}

export interface MovieSearch {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
}
