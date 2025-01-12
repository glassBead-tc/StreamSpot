import { Category } from '../types/movie';

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Trending Now',
    movies: [
      {
        id: '1',
        title: 'The Dark Forest',
        description: 'A thrilling adventure into the unknown depths of an ancient forest.',
        thumbnailUrl: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=500',
        videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4',
        genre: 'Adventure',
        year: 2023,
        duration: '2h 15m',
        rating: 'PG-13'
      },
      {
        id: '2',
        title: 'Ocean\'s Mystery',
        description: 'Dive deep into the mysteries of the ocean.',
        thumbnailUrl: 'https://images.unsplash.com/photo-1518134346374-184f9d21cea2?w=500',
        videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4',
        genre: 'Documentary',
        year: 2023,
        duration: '1h 45m',
        rating: 'PG'
      },
      // Add more movies as needed
    ]
  },
  {
    id: '2',
    name: 'Popular on Netflix',
    movies: [
      {
        id: '3',
        title: 'City Lights',
        description: 'A modern tale of love and ambition in the big city.',
        thumbnailUrl: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?w=500',
        videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4',
        genre: 'Drama',
        year: 2023,
        duration: '2h 30m',
        rating: 'R'
      },
      {
        id: '4',
        title: 'Mountain Peak',
        description: 'Follow the journey of climbers attempting to reach the world\'s highest peaks.',
        thumbnailUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500',
        videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4',
        genre: 'Documentary',
        year: 2023,
        duration: '1h 55m',
        rating: 'PG'
      },
      // Add more movies as needed
    ]
  },
];
