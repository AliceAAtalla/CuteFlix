import React from 'react';
import LogoCute from './components/LogoCute';
import { HeaderCute, Wrapper } from './components/HeaderCute';
import ButtonCute from './components/ButtonCute';
import FooterCute from './components/FooterCute';
import LinkAlura from './components/LinkAlura';
import { BannerCute, Text } from './components/BannerCute';
import TagCute from './components/TagCute';
import TitleCute from './components/TitleCute';
import DescriptionCute from './components/DescriptionCute';
import ThumbCute from './components/ThumbCute';
import Cachorrinho from './assets/img/Chorrinho1.jpg';

function App() {
  return (
    <>
      <HeaderCute>
        <Wrapper>
          <LogoCute />
          <ButtonCute>Novo Video</ButtonCute>
        </Wrapper>
      </HeaderCute>
      <BannerCute>
        <Text>
          <TagCute>Cãozinhos</TagCute>
          <TitleCute>Tirando Selfie</TitleCute>
          <DescriptionCute>Cãozinho tirando uma selfie</DescriptionCute>
        </Text>
        <ThumbCute src={Cachorrinho} alt="Cachorrinho tirando selfie" 
        // avatar={}
        />
      </BannerCute>
      <FooterCute>
        <LogoCute />
        <p>
          Site Feito na #ImersãoReact da
          <LinkAlura href="https://www.alura.com.br/"> Alura</LinkAlura>
        </p>
      </FooterCute>
    </>
  );
}

export default App;
