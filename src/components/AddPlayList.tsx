import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

interface Playlist {
  playlist_id: number;
  name: string;
  description: string;
}

interface AddPlaylistModalProps {
  onClose: () => void;
  onSubmit: (playlist: Playlist) => void;
}

const AddPlayList: React.FC<AddPlaylistModalProps> = ({
  onClose,
  onSubmit,
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    const playlistData = { name, description };
    if (name === "") {
      toast.error("Please Enter Name");
    } else if (description === "") {
      toast.error("Please Enter Description");
    } else {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/playlists/create`,
          playlistData
        );
        const { success, playlistId } = response.data;
        if (success) {
          const playlist: Playlist = {
            playlist_id: playlistId,
            name,
            description,
          };
          onSubmit(playlist);
          onClose();
          toast.success("Playlist added successfully!");
        }
      } catch (error) {
        console.error("Error adding playlist:", error);
        toast.error("Error adding playlists");
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="bg-white p-8 rounded-lg z-10 mx-4">
        <h2 className="text-lg font-bold mb-4">Add New Playlist</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full resize-none"
        ></textarea>
        <div className="flex justify-end">
          <button
            className="text-gray-900 border border-gray-800 hover:bg-gray-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPlayList;
