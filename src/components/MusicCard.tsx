import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
interface Song {
  id: number;
  title: string;
  artist: string;
  coverUrl: string;
  audioUrl: string;
}

interface MusicCardProps {
  song: Song;
}

const MusicCard: React.FC<MusicCardProps> = ({ song }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-bold mb-2">{song.title}</h2>
        <p className="text-md text-gray-500 mb-4">{song.artist}</p>
      <AudioPlayer
    src={song.audioUrl}
  />
    </div>
  );
};

export default MusicCard;
