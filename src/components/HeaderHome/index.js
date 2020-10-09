import React from 'react';
import { HeaderCute, Wrapper } from './styles';
import LogoCute from '../LogoCute';
import ButtonCute from '../ButtonCute';

function HeaderHome() {
  return (
    <HeaderCute>
      <Wrapper>
        <LogoCute />

        <ButtonCute as="a" href="/login">
          ENTRAR
        </ButtonCute>
      </Wrapper>
    </HeaderCute>
  );
}

export default HeaderHome;
