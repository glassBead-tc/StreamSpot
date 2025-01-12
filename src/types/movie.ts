export interface Movie {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  genre: string;
  year: number;
  duration: string;
  rating: string;
}

export interface Category {
  id: string;
  name: string;
  movies: Movie[];
}
