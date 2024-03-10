import React from 'react';

interface Song {
  id: number;
  title: string;
  artist: string;
  coverUrl: string;
}

interface MusicCardProps {
  song: Song;
}

const MusicCard: React.FC<MusicCardProps> = ({ song }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={song.coverUrl} alt={song.title} className="w-full h-auto mb-4" />
      <h3 className="text-lg font-bold mb-2">{song.title}</h3>
      <p className="text-sm text-gray-500">{song.artist}</p>
    </div>
  );
};

export default MusicCard;
