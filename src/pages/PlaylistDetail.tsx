import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MusicCard from "../components/MusicCard";
import AddSong from "../components/AddSong";
import axios from "axios";

interface Song {
  song_id: number;
  title: string;
  artist: string;
  audioUrl: string;
}

const PlaylistDetail: React.FC = () => {
  const { playlistId } = useParams<{ playlistId: string }>();
  const [songs, setSongs] = useState<Song[]>([]);

  const [isAddingSong, setIsAddingSong] = useState(false);
  const handleAddSongClick = () => {
    setIsAddingSong(true);
  };

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/playlists/${playlistId}/songs`
        );
        setSongs(response.data);
      } catch (error) {
        console.error("Error fetching playlist songs:", error);
      }
    };

    fetchSongs();
  }, [playlistId]);
  const handleAddPlaylist = (song: Song) => {
    setSongs([...songs, song]);
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold mb-4">Playlist Musics</h1>
        </div>
        <div>
          <button
            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            onClick={handleAddSongClick}
          >
            Add New
          </button>
        </div>
      </div>
      {isAddingSong ? (
        <AddSong
          playlistId={Number(playlistId)}
          onClose={() => setIsAddingSong(false)}
          onSubmit={handleAddPlaylist}
        />
      ) : (
        <div className="grid gap-4">
          {songs.map((song) => (
            <MusicCard key={song.song_id} song={song} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PlaylistDetail;
