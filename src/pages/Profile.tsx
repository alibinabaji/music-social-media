import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MusicCard from '../components/MusicCard';
import UserProfile from '../components/UserProfile';

interface Song {
  id: number;
  title: string;
  artist: string;
  coverUrl: string;
}

interface User {
  id: number;
  username: string;
  bio: string;
  profilePictureUrl: string;
}

const Profile: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [userSongs, setUserSongs] = useState<Song[]>([]);

  useEffect(() => {
    // Fetch user data and songs from an API or load them from a database based on the userId
    // Example:
    // fetch(`api/users/${userId}`)
    //   .then(response => response.json())
    //   .then(data => setUser(data));
    // fetch(`api/users/${userId}/songs`)
    //   .then(response => response.json())
    //   .then(data => setUserSongs(data));
    // For now, let's use some mock data:
    const mockUser: User = {
      id: Number(userId),
      username: 'example_user',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      profilePictureUrl: 'https://example.com/profile_picture.jpg'
    };
    const mockUserSongs: Song[] = [
      {
        id: 1,
        title: 'Song 1',
        artist: 'Artist 1',
        coverUrl: 'https://example.com/cover1.jpg'
      },
      {
        id: 2,
        title: 'Song 2',
        artist: 'Artist 2',
        coverUrl: 'https://example.com/cover2.jpg'
      }
    ];
    setUser(mockUser);
    setUserSongs(mockUserSongs);
  }, [userId]);

  return (
    <div>
      {user && <UserProfile user={user} />}
      <h2 className="text-2xl font-bold mt-4">User's Songs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {userSongs.map(song => (
          <MusicCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
