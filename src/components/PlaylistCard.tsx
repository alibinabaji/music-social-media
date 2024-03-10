import React from 'react';

interface Playlist {
  id: number;
  name: string;
  description: string;
  coverUrl: string;
}

interface PlaylistCardProps {
  playlist: Playlist;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-2">
      <img src={playlist.coverUrl} alt={playlist.name} className="w-full h-auto mb-4" />
      <h3 className="text-lg font-bold mb-2">{playlist.name}</h3>
      <p className="text-sm text-gray-500">{playlist.description}</p>
    </div>
  );
};

export default PlaylistCard;
