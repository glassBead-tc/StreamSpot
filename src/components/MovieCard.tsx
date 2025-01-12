import { Movie } from '../types/movie';
import { Play, Info } from 'lucide-react';

interface MovieCardProps {
  movie: Movie;
  onPlay: (movie: Movie) => void;
  onShowDetails: (movie: Movie) => void;
}

export default function MovieCard({ movie, onPlay, onShowDetails }: MovieCardProps) {
  return (
    <div className="relative group w-[300px] h-[169px] flex-shrink-0 transition-transform duration-300 transform hover:scale-110 hover:z-10">
      <img
        src={movie.thumbnailUrl}
        alt={movie.title}
        className="w-full h-full object-cover rounded"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 rounded">
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-4">
          <button
            onClick={() => onPlay(movie)}
            className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            <Play size={24} />
          </button>
          <button
            onClick={() => onShowDetails(movie)}
            className="bg-gray-500 text-white p-2 rounded-full hover:bg-gray-600 transition-colors"
          >
            <Info size={24} />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white font-bold">{movie.title}</h3>
        </div>
      </div>
    </div>
  );
}
