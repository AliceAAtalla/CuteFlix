import React from 'react';
import {
  WrapperThumb, Thumb, Avatar, Background,
} from './styles';
import AvatarCute from '../AvatarCute';

const ThumbCute = ({
  src, alt, avatar, channelName,
}) => (
  <Background>
    <WrapperThumb>
      <Thumb src={src} alt={alt} />
      <AvatarCute photo={avatar} channelName={channelName} />
    </WrapperThumb>
  </Background>
);

export default ThumbCute;
