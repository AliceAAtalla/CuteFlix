import React from 'react';
import LogoCute from './components/LogoCute';
import HeaderLogin from './components/HeaderLogin';
import FooterCute from './components/FooterCute';
import LinkAlura from './components/LinkAlura';
import { BannerCute, Text } from './components/BannerCute';
import TagCute from './components/TagCute';
import TitleCute from './components/TitleCute';
import DescriptionCute from './components/DescriptionCute';
import ThumbCute from './components/ThumbCute';
import Cachorrinho from './assets/img/Chorrinho1.jpg';
import channel1 from './assets/img/Channel.jpg';

function App() {
  return (
    <>
      <HeaderLogin />
      <BannerCute>
        <Text>
          <TagCute>Animais Fofos</TagCute>
          <TitleCute>Boas vindas a CuteFlix!</TitleCute>
          <DescriptionCute>
            Aqui você vai ver vários videos apaixonantes e fofos! Se derreta com Cachorinhos,
            Gatinhos, Passarinhos, Pandas, e muitas outras fofuras!
          </DescriptionCute>
        </Text>
        <ThumbCute
          src={Cachorrinho}
          alt="Cachorrinho tirando selfie"
          channelName="Dogs"
          avatar={channel1}
          title="Cachorinho tirando uma selfie"
          timer="00:00"
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
