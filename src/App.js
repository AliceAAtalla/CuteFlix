import React from 'react';
import LogoAnima from './components/LogoAnima';
import HeaderAnima from './components/HeaderAnima';
import ButtonAnima from './components/ButtonAnima';
import FooterAnima from './components/FooterAnima';
import LinkAlura from './components/LinkAlura';

function App() {
  return (
    <>
      <HeaderAnima>
        <LogoAnima />
        <ButtonAnima>Novo Video</ButtonAnima>
      </HeaderAnima>
      <FooterAnima>
        <LogoAnima />
        <p>
          Site Feito na #ImersãoReact da
          <LinkAlura href='https://www.alura.com.br/'> Alura</LinkAlura>
        </p>
      </FooterAnima>
    </>
  );
}

export default App;
