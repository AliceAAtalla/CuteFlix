import React, {useState} from 'react';
import ThumbCute from '../ThumbCute';
import { CarouselStyle, Right, WrapperCarousel } from './styles';

const CarouselCute = ({ videos }) => {
  const [moveRight, setMoveRight] = useState(false);

  const actionRight = () => {
    setMoveRight(true);
  };

  return (
    <CarouselStyle>
      <WrapperCarousel moveRight={moveRight}>
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
