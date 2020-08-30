import React from 'react';
import FooterCute from './styles';
import LogoCute from '../LogoCute';
import LinkAlura from '../LinkAlura';

const Footer = () => (
  <FooterCute>
    <LogoCute />
    <p>
      Site Feito na #ImersãoReact da
      <LinkAlura href="https://www.alura.com.br/"> Alura</LinkAlura>
      {' por '}
      <LinkAlura href="https://www.linkedin.com/in/aliceatalla/">
        Alice Arruda Atalla!
      </LinkAlura>
    </p>
  </FooterCute>
);

export default Footer;
