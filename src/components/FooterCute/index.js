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
    </p>
  </FooterCute>
);

export default Footer;
