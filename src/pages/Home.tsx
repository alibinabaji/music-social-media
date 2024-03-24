import React, { useState, useEffect } from "react";
import AddPlayList from "../components/AddPlayList";
import PlaylistCarousel from "../components/PlaylistCarousel";
import axios from "axios";
import { toast } from "react-toastify";

const Home = () => {
  interface Playlist {
    playlist_id: number;
    name: string;
    description: string;
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/playlists/all`
        );

        setPlaylists(response.data);
      } catch (error) {
        console.error("Error fetching playlists:", error);
        toast.error("Error fetching playlists");
      }
    };

    fetchPlaylists();
  }, []);
  const handleAddPlaylist = (playlist: Playlist) => {
    setPlaylists([...playlists, playlist]);
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold">My Playlist</h2>
        </div>
        <div>
          <button
            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            onClick={() => setIsModalOpen(true)}
          >
            Add New
          </button>
        </div>
      </div>
      <PlaylistCarousel playlists={playlists} />
      {isModalOpen && (
        <AddPlayList
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPlaylist}
        />
      )}
    </div>
  );
};

export default Home;
