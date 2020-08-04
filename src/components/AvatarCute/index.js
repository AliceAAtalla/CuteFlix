import PropTypes from 'prop-types';
import React from 'react';
import { Avatar, Channel, WrapperAvatar } from './styles';

const AvatarCute = ({ photo, channelName }) => (
  <WrapperAvatar>
    <Avatar src={photo} alt={channelName} />
    <Channel>{channelName}</Channel>
  </WrapperAvatar>
);

AvatarCute.propTypes = {
  channelName: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default AvatarCute;
