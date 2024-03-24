import React, { useState, useEffect } from "react";
import MusicCard from "../components/MusicCard";
import axios from "axios";

interface Song {
  song_id: number;
  title: string;
  artist: string;
  coverUrl: string;
  audioUrl: string;
}

const Explore: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/songs/all`
        );
        console.log(response.data);
        setSongs(response.data);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSongs();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Explore Music</h1>
      <div className="grid grid-cols-1 gap-4">
        {songs.map((song) => (
          <MusicCard key={song.song_id} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
