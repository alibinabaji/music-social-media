import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

interface Song {
  song_id: number;
  title: string;
  artist: string;
  audioUrl: string;
}

interface AddSongProps {
  playlistId: number;
  onClose: () => void;
  onSubmit: (song: Song) => void;
}

const AddSong: React.FC<AddSongProps> = ({ playlistId, onClose, onSubmit }) => {
  const [songTitle, setSongTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const userId = 1;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (songTitle === "") {
      toast.error("Please Enter Title");
    } else if (artist === "") {
      toast.error("Please Enter Artist");
    } else if (audioUrl === "") {
      toast.error("Please Enter URL");
    } else {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/playlists/${playlistId}/addNew`,

          {
            songTitle,
            artist,
            audioUrl,
            userId,
          }
        );
        const song: Song = {
          song_id: response.data.response,
          title: songTitle,
          artist,
          audioUrl,
        };
        onSubmit(song);
        onClose();
        toast.success("Music added successfully!");
      } catch (error) {
        console.error("Error adding song:", error);
        toast.error("Error adding Music");
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-900 opacity-50 z-10"></div>
      <div className="bg-white p-8 rounded-lg z-50 mx-4">
        <span
          className="close absolute top-0 right-0 mt-2 mr-4 cursor-pointer text-2xl"
          onClick={onClose}
        >
          &times;
        </span>
        <h2 className="text-lg font-bold mb-4">Add Song</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="songTitle">Song Title:</label>
            <input
              type="text"
              id="songTitle"
              value={songTitle}
              onChange={(e) => setSongTitle(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="artist">Artist:</label>
            <input
              type="text"
              id="artist"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="audioUrl">Audio URL:</label>
            <input
              type="text"
              id="audioUrl"
              value={audioUrl}
              onChange={(e) => setAudioUrl(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-900 border border-gray-800 hover:bg-gray-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Add Song
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSong;
