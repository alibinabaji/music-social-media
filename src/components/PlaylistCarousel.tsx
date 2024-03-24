import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PlaylistCard from "./PlaylistCard";

interface Playlist {
  playlist_id: number;
  name: string;
  description: string;
}

interface PlaylistCarouselProps {
  playlists: Playlist[];
}

const PlaylistCarousel: React.FC<PlaylistCarouselProps> = ({ playlists }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings}>
        {playlists.map((playlist) => (
          <div key={playlist.playlist_id}>
            <PlaylistCard playlist={playlist} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PlaylistCarousel;
