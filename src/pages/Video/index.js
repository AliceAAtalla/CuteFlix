import React from 'react';
// import Header from '../../components/HeaderLogin';
import FooterCute from '../../components/FooterCute';
import LinkAlura from '../../components/LinkAlura';
import LogoCute from '../../components/LogoCute';
import { HeaderCute, Wrapper } from '../../components/HeaderLogin/styles';

const Video = () => (
  <>
    <HeaderCute>
      <Wrapper>
        <LogoCute />
      </Wrapper>
    </HeaderCute>
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
