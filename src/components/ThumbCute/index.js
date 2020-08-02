import React from 'react';
import { WrapperThumb, Thumb, Avatar } from './styles';

const ThumbCute = ({ src, alt, avatar, channelName }) => (
  <WrapperThumb>
    <Thumb src={src} alt={alt} />
    <Avatar src={avatar} alt={channelName} />
  </WrapperThumb>
);

export default ThumbCute;
