import React from 'react';
import { HeaderCute, Wrapper } from './styles';
import LogoCute from '../LogoCute';
import ButtonCute from '../ButtonCute';

function HeaderLogin() {
  return (
    <HeaderCute>
      <Wrapper>
        <LogoCute />

        <ButtonCute as="a" href="/video/new">
          ENTRAR
        </ButtonCute>
      </Wrapper>
    </HeaderCute>
  );
}

export default HeaderLogin;
