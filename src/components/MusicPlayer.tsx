import React from 'react';

interface Song {
  id: number;
  title: string;
  artist: string;
  audioUrl: string;
}

interface MusicPlayerProps {
  song: Song;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ song }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-bold mb-2">{song.title}</h3>
      <p className="text-sm text-gray-500">{song.artist}</p>
      <audio controls className="w-full mt-4">
        <source src={song.audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MusicPlayer;
