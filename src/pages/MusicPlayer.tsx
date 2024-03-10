import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStop, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';

const MusicPlayerPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const song = {
    id: 1,
    title: 'Song 1',
    artist: 'Artist 1',
    audioUrl: 'https://dls.music-fa.com/tagdl/1402/Makus%20Ft%20Darkmelox%20-%20Khaab%20Didi%20Kheyre%20(320).mp3',
    coverUrl: ''
  };

  const audio = new Audio(song.audioUrl);

  useEffect(() => {
    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    // Logic to play the next song
  };

  const handlePrevious = () => {
    // Logic to play the previous song
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  
  return (
    <div className="max-w-md container m-auto p-8">
      <div className="flex flex-col items-center">
        <img src={song.coverUrl} alt={song.title} className="rounded-full w-64 h-64 mb-4" />
        <h2 className="text-3xl font-bold mb-2">{song.title}</h2>
        <p className="text-xl text-gray-500 mb-4">{song.artist}</p>
        <div className="flex justify-center items-center mb-4">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full mr-4" onClick={handlePrevious}>
        <FontAwesomeIcon icon={faStepBackward} />
        </button>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full mr-4" onClick={handlePlayPause}>
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </button>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full" onClick={handleNext}>
        <FontAwesomeIcon icon={faStepForward} />
        </button>
        </div>
        <div className="relative w-full">
          <div className="bg-gray-200 h-4 rounded-full"></div>
          <div
            className="bg-blue-500 h-4 rounded-full absolute top-0 left-0"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between w-full mt-2">
          <span className="text-sm">{formatTime(currentTime)}</span>
          <span className="text-sm">{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayerPage;
