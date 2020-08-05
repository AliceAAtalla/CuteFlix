import React from 'react';
import { HeaderCute, Wrapper } from '../../components/HeaderLogin/styles';
import LogoCute from '../../components/LogoCute';
import FooterCute from '../../components/FooterCute';
import LinkAlura from '../../components/LinkAlura';

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
