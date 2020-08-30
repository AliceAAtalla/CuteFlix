import React from 'react';
import PropTypes from 'prop-types';
import { BannerStyle, Text } from './styles';
import TagCute from '../TagCute';
import TitleCute from '../TitleCute';
import DescriptionCute from '../DescriptionCute';

const BannerCute = ({ children, tag, title, description }) => (
  <BannerStyle>
    <Text>
      <TagCute title>{tag}</TagCute>
      <TitleCute>{title}</TitleCute>
      <DescriptionCute>{description}</DescriptionCute>
    </Text>

    {children}
  </BannerStyle>
);

BannerCute.propTypes = {
  children: PropTypes.element.isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BannerCute;
