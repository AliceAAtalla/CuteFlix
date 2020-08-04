import PropTypes from 'prop-types';
import React from 'react';
import { WrapperThumb, Thumb, Background, Title, Timer } from './styles';
import AvatarCute from '../AvatarCute';

const ThumbCute = ({ src, alt, avatar, channelName, title, timer }) => (
  <Background>
    <WrapperThumb>
      <Thumb src={src} alt={alt} />
      <AvatarCute photo={avatar} channelName={channelName} />
      <Title>{title}</Title>
      <Timer>{timer}</Timer>
    </WrapperThumb>
  </Background>
);

ThumbCute.propTypes = {
  alt: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  timer: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ThumbCute;
