import React from 'react';
import {
  WrapperThumb, Thumb, Avatar, Background,
} from './styles';

const ThumbCute = ({
  src, alt, avatar, channelName,
}) => (
  <Background>
    <WrapperThumb>
      <Thumb src={src} alt={alt} />
      <Avatar src={avatar} alt={channelName} />
    </WrapperThumb>
  </Background>
);

export default ThumbCute;
