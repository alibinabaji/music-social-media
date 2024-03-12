import React, { useState, useEffect } from "react";
import MusicCard from "../components/MusicCard";

interface Song {
  id: number;
  title: string;
  artist: string;
  coverUrl: string;
  audioUrl: string;
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
        title: "Song 1",
        artist: "Artist 1",
        coverUrl: "https://example.com/cover1.jpg",
        audioUrl:
          "https://dls.music-fa.com/tagdl/1402/Makus%20Ft%20Darkmelox%20-%20Khaab%20Didi%20Kheyre%20(320).mp3",
      },
      {
        id: 2,
        title: "Song 2",
        artist: "Artist 2",
        coverUrl: "https://example.com/cover2.jpg",
        audioUrl:
          "https://dls.music-fa.com/tagdl/1402/Makus%20Ft%20Darkmelox%20-%20Khaab%20Didi%20Kheyre%20(320).mp3",
      },
    ];
    setSongs(mockSongs);
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Explore Music</h1>
      <div className="grid grid-cols-1 gap-4">
        {songs.map((song) => (
          <MusicCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
