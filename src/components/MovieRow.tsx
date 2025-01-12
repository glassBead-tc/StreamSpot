import { Category } from '../types/movie';
import MovieCard from './MovieCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

interface MovieRowProps {
  category: Category;
  onPlayMovie: (movieId: string) => void;
  onShowDetails: (movieId: string) => void;
}

export default function MovieRow({ category, onPlayMovie, onShowDetails }: MovieRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { current } = rowRef;
      const scrollAmount = 300 * 2; // Scroll 2 items at a time
      if (direction === 'left') {
        current.scrollLeft -= scrollAmount;
      } else {
        current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className="relative group py-8">
      <h2 className="text-white text-2xl font-bold mb-4 px-12">{category.name}</h2>
      <div className="relative">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="text-white" size={24} />
        </button>
        <div
          ref={rowRef}
          className="flex gap-2 overflow-x-auto px-12 scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {category.movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onPlay={() => onPlayMovie(movie.id)}
              onShowDetails={() => onShowDetails(movie.id)}
            />
          ))}
        </div>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="text-white" size={24} />
        </button>
      </div>
    </div>
  );
}
