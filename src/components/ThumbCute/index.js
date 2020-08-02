import React from 'react';
import {
  WrapperThumb, Thumb, Avatar, Background, Title,
} from './styles';
import AvatarCute from '../AvatarCute';

const ThumbCute = ({
  src, alt, avatar, channelName, title,
}) => (
  <Background>
    <WrapperThumb>
      <Thumb src={src} alt={alt} />
      <AvatarCute photo={avatar} channelName={channelName} />
      <Title>{title}</Title>
    </WrapperThumb>
  </Background>
);

export default ThumbCute;
