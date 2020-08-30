import React, { useState, useRef, useEffect } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import ThumbCute from '../ThumbCute';
import {
  CarouselStyle, Right, WrapperCarousel, Left,
} from './styles';

const CarouselCute = ({ videos }) => {
  const [move, setMove] = useState(0);
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const windowWidth = useWindowWidth();
  const $wrapper = useRef(null);

  useEffect(() => {
    setWrapperWidth($wrapper.current.getBoundingClientRect().width);
  }, []);

  const actionRight = () => {
    setMove((prevState) => prevState - 1);
  };

  const actionLeft = () => {
    setMove((prevState) => prevState + 1);
  };

  return (
    <CarouselStyle move={move} moveLastThumb={wrapperWidth - windowWidth}>
      <Left onClick={actionLeft} />
      <WrapperCarousel ref={$wrapper}>
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
