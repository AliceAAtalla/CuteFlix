import React from 'react';
import Header from '../../components/HeaderCute';
import FooterCute from '../../components/FooterCute';
import LinkAlura from '../../components/LinkAlura';
import LogoCute from '../../components/LogoCute';

const Video = () => (
  <>
    <Header />
    <FooterCute>
      <LogoCute />
      <p>
        Site Feito na #ImersãoReact da
        <LinkAlura href="https://www.alura.com.br/"> Alura</LinkAlura>
      </p>
    </FooterCute>
  </>
);

export default Video;
