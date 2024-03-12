import React from "react";
import SearchForm from "../components/SearchMusic";
import PlaylistCarousel from "../components/PlaylistCarousel";
const playlistsData = [
  {
    id: 1,
    name: "Chill Beats",
    description: "Relaxing instrumental beats for any occasion.",
    coverUrl: "https://example.com/chill-beats-cover.jpg",
  },
  {
    id: 2,
    name: "Workout Mix",
    description: "Energetic tunes to keep you motivated during your workout.",
    coverUrl: "https://example.com/workout-mix-cover.jpg",
  },
];
const Home: React.FC = () => {
  return (
    <div>
      {/* <SearchForm /> */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold">My Playlist</h2>
        </div>
        <div>
          <button className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
            Add New
          </button>
        </div>
      </div>
      <PlaylistCarousel playlists={playlistsData} />
      {/* <h2 className="text-lg font-bold my-8">Followed Playlist</h2>
      <PlaylistCarousel playlists={playlistsData} /> */}
    </div>
  );
};

export default Home;
