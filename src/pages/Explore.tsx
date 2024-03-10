import React, { useState, useEffect } from 'react';
import MusicCard from '../components/MusicCard';

interface Song {
  id: number;
  title: string;
  artist: string;
  coverUrl: string;
}

const Explore: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    // Fetch songs from an API or load them from a database
    // Example:
    // fetch('api/songs')
    //   .then(response => response.json())
    //   .then(data => setSongs(data));
    // For now, let's use some mock data:
    const mockSongs: Song[] = [
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
      }
    ];
    setSongs(mockSongs);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Explore Music</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {songs.map(song => (
          <MusicCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
