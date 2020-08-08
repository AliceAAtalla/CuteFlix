import React, { useState } from 'react';
import ThumbCute from '../ThumbCute';
import {
  CarouselStyle, Right, WrapperCarousel, Left,
} from './styles';

const CarouselCute = ({ videos }) => {
  const [move, setMove] = useState(0);

  const actionRight = () => {
    setMove((prevState) => prevState - 1);
  };

  const actionLeft = () => {
    setMove((prevState) => prevState + 1);
  };

  const leftShow = () => move < 0;

  return (
    <CarouselStyle leftShow={leftShow()} rightShow={true}>
      <Left onClick={actionLeft} />
      <WrapperCarousel move={move}>
        {videos.map(({
          src, alt, title, avatar, channelName, timer, link,
        }) => (
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
      </WrapperCarousel>
      <Right onClick={actionRight} />
    </CarouselStyle>
  );
};

export default CarouselCute;
