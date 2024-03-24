import React from "react";
import { Link } from "react-router-dom";

interface Playlist {
  playlist_id: number;
  name: string;
  description: string;
}

interface PlaylistCardProps {
  playlist: Playlist;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-2">
      <h3 className="text-lg font-bold mb-2">{playlist.name}</h3>
      <p className="text-sm text-gray-500">{playlist.description}</p>

      <Link to={`/playlist/${playlist.playlist_id}`} relative="path">
        <button className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 my-4">
          view
        </button>
      </Link>
    </div>
  );
};

export default PlaylistCard;
