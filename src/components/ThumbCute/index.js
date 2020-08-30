import PropTypes from 'prop-types';
import React from 'react';
import { WrapperThumb, Thumb, Background, Title, Timer } from './styles';
import AvatarCute from '../AvatarCute';

const ThumbCute = ({ src, alt, avatar, channelName, title, timer, link }) => (
  <a
    style={{ 'text-decoration': 'none', 'margin-right': '15rem' }}
    target="_blank"
    rel="noopener noreferrer"
    href={link}
  >
    <Background>
      <WrapperThumb>
        <Thumb src={src} alt={alt} />
        <AvatarCute photo={avatar} channelName={channelName} />
        <Title>{title}</Title>
        <Timer>{timer}</Timer>
      </WrapperThumb>
    </Background>
  </a>
);

ThumbCute.propTypes = {
  alt: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  timer: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ThumbCute;
