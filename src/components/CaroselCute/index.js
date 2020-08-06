import React from 'react';
import ThumbCute from '../ThumbCute';
import {CarouselStyle, Right} from './styles';

const CarouselCute = ({ videos }) => (
  <CarouselStyle>
    {videos.map(({ src, alt, title, avatar, channelName, timer, link }) => (
      <ThumbCute
        src={src}
        alt={alt}
        title={title}
        avatar={avatar}
        channelName={channelName}
        timer={timer}
        link={link}
      />
    ))}
  <Right />
  </CarouselStyle>
);

export default CarouselCute;
