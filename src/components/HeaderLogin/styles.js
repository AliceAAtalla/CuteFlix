import styled from 'styled-components';
import ButtonCute from '../ButtonCute';
import LogoCute from '../LogoCute';

export const HeaderCute = styled.header`
  background-color: var(--color-blue-light);
  box-shadow: 0 4px 4px var(--color-green-blue);
  padding: 20rem 35rem;

  @media (max-width: 800px) {
    padding: 15rem 16rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    justify-content: center;
    & > ${LogoCute} {
      height: 35rem;
    }

    & > ${ButtonCute} {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100vw;
      border: none;
      border-radius: 0;
    }
  }
`;
