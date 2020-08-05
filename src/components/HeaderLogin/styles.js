import styled from 'styled-components';
import ButtonCute from '../ButtonCute';
import LogoCute from '../LogoCute';
import container from '../../styles/tools/container';

export const HeaderCute = styled.header`
  background-color: var(--color-blue-light);
  border-bottom: 4px solid var(--color-red-light);
  padding: 20rem 0;

  @media (max-width: 800px) {
    padding: 15rem 16rem;
  }
`;

export const Wrapper = styled.div`
  ${container};
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
