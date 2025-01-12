import { Movie } from '../types/movie';
import { X, Play } from 'lucide-react';

interface MovieDetailsProps {
  movie: Movie;
  onClose: () => void;
  onPlay: () => void;
}

export default function MovieDetails({ movie, onClose, onPlay }: MovieDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-zinc-900 rounded-lg max-w-3xl w-full relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white/80 hover:text-white"
        >
          <X size={24} />
        </button>
        <img
          src={movie.thumbnailUrl}
          alt={movie.title}
          className="w-full h-[400px] object-cover rounded-t-lg"
        />
        <div className="p-6">
          <h2 className="text-3xl font-bold text-white mb-2">{movie.title}</h2>
          <div className="flex gap-4 text-gray-400 text-sm mb-4">
            <span>{movie.year}</span>
            <span>{movie.rating}</span>
            <span>{movie.duration}</span>
            <span>{movie.genre}</span>
          </div>
          <p className="text-gray-300 mb-6">{movie.description}</p>
          <button
            onClick={onPlay}
            className="flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors"
          >
            <Play size={20} />
            Play
          </button>
        </div>
      </div>
    </div>
  );
}
