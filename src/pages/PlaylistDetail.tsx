import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MusicCard from "../components/MusicCard";

interface Song {
  id: number;
  title: string;
  artist: string;
  coverUrl: string;
  audioUrl: string;
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
        title: "Song 1",
        artist: "Artist 1",
        coverUrl: "https://example.com/cover1.jpg",
        audioUrl:
          "https://dls.music-fa.com/tagdl/1402/Makus%20Ft%20Darkmelox%20-%20Khaab%20Didi%20Kheyre%20(320).mp3",
      },
      {
        id: 1,
        title: "Song 1",
        artist: "Artist 1",
        coverUrl: "https://example.com/cover1.jpg",
        audioUrl:
          "https://dls.music-fa.com/tagdl/1402/Makus%20Ft%20Darkmelox%20-%20Khaab%20Didi%20Kheyre%20(320).mp3",
      },
      {
        id: 1,
        title: "Song 1",
        artist: "Artist 1",
        coverUrl: "https://example.com/cover1.jpg",
        audioUrl:
          "https://dls.music-fa.com/tagdl/1402/Makus%20Ft%20Darkmelox%20-%20Khaab%20Didi%20Kheyre%20(320).mp3",
      },
      {
        id: 1,
        title: "Song 1",
        artist: "Artist 1",
        coverUrl: "https://example.com/cover1.jpg",
        audioUrl:
          "https://dls.music-fa.com/tagdl/1402/Makus%20Ft%20Darkmelox%20-%20Khaab%20Didi%20Kheyre%20(320).mp3",
      },
      {
        id: 1,
        title: "Song 1",
        artist: "Artist 1",
        coverUrl: "https://example.com/cover1.jpg",
        audioUrl:
          "https://dls.music-fa.com/tagdl/1402/Makus%20Ft%20Darkmelox%20-%20Khaab%20Didi%20Kheyre%20(320).mp3",
      },
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
    setPlaylist(mockPlaylist);
  }, [playlistId]);

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold mb-4">Playlist Musics</h1>
        </div>
        <div>
          <button className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
            Add New
          </button>
        </div>
      </div>
      <div className="grid gap-4">
        {playlist.map((song) => (
          <MusicCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
};

export default PlaylistDetail;
