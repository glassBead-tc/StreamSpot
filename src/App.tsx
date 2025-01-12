import { useState } from 'react';
import { mockCategories } from './data/mockData';
import MovieRow from './components/MovieRow';
import MovieDetails from './components/MovieDetails';
import VideoPlayer from './components/VideoPlayer';
import './index.css';

function App() {
  const [selectedMovieId, setSelectedMovieId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const selectedMovie = selectedMovieId
    ? mockCategories.flatMap(category => category.movies).find(movie => movie.id === selectedMovieId)
    : null;

  const handlePlayMovie = (movieId: string) => {
    setSelectedMovieId(movieId);
    setIsPlaying(true);
  };

  const handleShowDetails = (movieId: string) => {
    setSelectedMovieId(movieId);
    setIsPlaying(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="p-4">
        <h1 className="text-red-600 text-4xl font-bold px-8">NETFLIX</h1>
      </header>

      <main className="pb-12">
        {mockCategories.map((category) => (
          <MovieRow
            key={category.id}
            category={category}
            onPlayMovie={handlePlayMovie}
            onShowDetails={handleShowDetails}
          />
        ))}
      </main>

      {selectedMovie && !isPlaying && (
        <MovieDetails
          movie={selectedMovie}
          onClose={() => setSelectedMovieId(null)}
          onPlay={() => setIsPlaying(true)}
        />
      )}

      {selectedMovie && isPlaying && (
        <VideoPlayer
          videoUrl={selectedMovie.videoUrl}
          onClose={() => {
            setIsPlaying(false);
            setSelectedMovieId(null);
          }}
        />
      )}
    </div>
  );
}

export default App;
