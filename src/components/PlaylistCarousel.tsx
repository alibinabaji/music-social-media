import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PlaylistCard from './PlaylistCard';

interface Playlist {
  id: number;
  name: string;
  description: string;
  coverUrl: string;
}

interface PlaylistCarouselProps {
  playlists: Playlist[];
}

const PlaylistCarousel: React.FC<PlaylistCarouselProps> = ({ playlists }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className='m-4'>
    <Slider {...settings}>
      {playlists.map(playlist => (
        <div key={playlist.id}>
          <PlaylistCard playlist={playlist} />
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default PlaylistCarousel;
