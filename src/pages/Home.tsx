import React from 'react';
import MusicCard from '../components/MusicCard';
import MusicPlayer from '../components/MusicPlayer';
import SearchForm from '../components/SearchMusic';
import PlaylistCarousel from '../components/PlaylistCarousel';

// Example data
const songs = [
  {
    id: 1,
    title: 'Song 1',
    artist: 'Artist 1',
    coverUrl: 'https://example.com/cover1.jpg'
  },
  {
    id: 2,
    title: 'Song 2',
    artist: 'Artist 2',
    coverUrl: 'https://example.com/cover2.jpg'
  },
  // Add more songs as needed
];

const songs2 = [
    {
      id: 1,
      title: 'Song 1',
      artist: 'Artist 1',
      audioUrl: 'https://dls.music-fa.com/tagdl/1402/Makus%20Ft%20Darkmelox%20-%20Khaab%20Didi%20Kheyre%20(320).mp3'
    },
    {
      id: 2,
      title: 'Song 2',
      artist: 'Artist 2',
      audioUrl: 'https://example.com/cover2.jpg'
    },
    // Add more songs as needed
  ];
  const playlistsData = [
    {
      id: 1,
      name: 'Chill Beats',
      description: 'Relaxing instrumental beats for any occasion.',
      coverUrl: 'https://example.com/chill-beats-cover.jpg',
    },
    {
      id: 2,
      name: 'Workout Mix',
      description: 'Energetic tunes to keep you motivated during your workout.',
      coverUrl: 'https://example.com/workout-mix-cover.jpg',
    },
    // Add more playlist objects as needed
  ];
const Home: React.FC = () => {
  return (
    <div className='max-w-md m-auto'>
      <SearchForm />
      <h2 className='m-4'>My Playlist</h2>
      <PlaylistCarousel playlists={playlistsData}/>
      <h2 className='m-4'>Followed Playlist</h2>
      <PlaylistCarousel playlists={playlistsData}/>
    </div>
  );
};

export default Home;
