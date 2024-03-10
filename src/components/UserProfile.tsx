import React from 'react';

interface User {
  id: number;
  username: string;
  bio: string;
  profilePictureUrl: string;
}

interface UserProfileProps {
  user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center mb-4">
        <img src={user.profilePictureUrl} alt={user.username} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h2 className="text-xl font-bold">{user.username}</h2>
          <p className="text-gray-500">{user.bio}</p>
        </div>
      </div>
      {/* Additional user information or functionality can be added here */}
    </div>
  );
};

export default UserProfile;
