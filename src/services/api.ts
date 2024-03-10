const BASE_URL = 'https://api.example.com';

export const fetchSongs = async (): Promise<Song[]> => {
  try {
    const response = await fetch(`${BASE_URL}/songs`);
    if (!response.ok) {
      throw new Error('Failed to fetch songs');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching songs:', error);
    throw error;
  }
};

// Define other API functions as needed

export interface Song {
  id: number;
  title: string;
  artist: string;
  coverUrl: string;
}
