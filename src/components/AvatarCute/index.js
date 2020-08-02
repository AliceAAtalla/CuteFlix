import React from 'react';
import { Avatar, Channel, WrapperAvatar } from './styles';

const AvatarCute = ({ photo, channelName }) => (
  <WrapperAvatar>
    <Avatar src={photo} alt={channelName} />
    <Channel>{channelName}</Channel>
  </WrapperAvatar>
);

export default AvatarCute;
