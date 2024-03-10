import React from 'react';

interface Song {
  title: string;
  artist: string;
  url: string;
}

interface PlaylistProps {
  playlist: Song[];
}

const Playlist: React.FC<PlaylistProps> = ({ playlist }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold mb-4">Playlist Name</h2>
      <ul>
        {playlist.map((song, index) => (
          <li key={index} className="flex items-center justify-between py-2 border-b">
            <div>
              <span className="font-bold">{song.title}</span> - {song.artist}
            </div>
            <audio controls>
              <source src={song.url} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
