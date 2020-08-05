import React, { Fragment } from 'react';
import HeaderLogin from './components/HeaderLogin';
import { BannerCute, Text } from './components/BannerCute';
import TagCute from './components/TagCute';
import TitleCute from './components/TitleCute';
import DescriptionCute from './components/DescriptionCute';
import ThumbCute from './components/ThumbCute';
import Cachorrinho from './assets/img/Chorrinho1.jpg';
import channel1 from './assets/img/Channel.jpg';
import Footer from './components/FooterCute';
import SectionCute from './components/SectionCute';

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
          alt="Bem vindos a CuteFlix!"
          channelName="CuteFlix"
          avatar={channel1}
          title="Bem vindos a CuteFlix!"
          timer="00:00"
        />
      </BannerCute>
      <SectionCute>
        <TagCute>Cachorrinho</TagCute>
      </SectionCute>
      <Footer />
    </>
  );
}

export default App;
