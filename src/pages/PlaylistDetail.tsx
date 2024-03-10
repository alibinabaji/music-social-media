import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MusicCard from '../components/MusicCard';

interface Song {
  id: number;
  title: string;
  artist: string;
  coverUrl: string;
}

const PlaylistDetail: React.FC = () => {
  const { playlistId } = useParams<{ playlistId: string }>();
  const [playlist, setPlaylist] = useState<Song[]>([]);

  useEffect(() => {
    // Fetch playlist data from an API or load it from a database based on the playlistId
    // Example:
    // fetch(`api/playlists/${playlistId}`)
    //   .then(response => response.json())
    //   .then(data => setPlaylist(data));
    // For now, let's use some mock data:
    const mockPlaylist: Song[] = [
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
    setPlaylist(mockPlaylist);
  }, [playlistId]);

  return (
    <div className='max-w-md m-auto'>
      <h1 className="text-3xl font-bold mb-4">Playlist Detail</h1>
      <div className="grid gap-4">
        {playlist.map(song => (
          <MusicCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
};

export default PlaylistDetail;
