import React from 'react';
import {
  WrapperThumb, Thumb, Avatar, Background, Title, Timer,
} from './styles';
import AvatarCute from '../AvatarCute';

const ThumbCute = ({
  src, alt, avatar, channelName, title, timer,
}) => (
  <Background>
    <WrapperThumb>
      <Thumb src={src} alt={alt} />
      <AvatarCute photo={avatar} channelName={channelName} />
      <Title>{title}</Title>
      <Timer>{timer}</Timer>
    </WrapperThumb>
  </Background>
);

export default ThumbCute;
