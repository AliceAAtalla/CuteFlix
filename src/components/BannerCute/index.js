import styled from 'styled-components';
import container from '../../tools/container';
import TagCute from '../TagCute';
import TitleCute from '../TitleCute';

export const Text = styled.div`
  padding-top: 10rem;
  max-width: 45%;

  ${TagCute} {
    margin-bottom: 35rem;
  }

  ${TitleCute} {
    margin-bottom: 20rem;
  }
`;

export const BannerCute = styled.section`
  ${container};
  display: flex;
  justify-content: space-between;
  max-height: 70vh;
  height: 100vh;
  align-items: center;
`;
