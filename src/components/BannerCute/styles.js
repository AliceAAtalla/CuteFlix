import styled from 'styled-components';
import container from '../../styles/tools/container';
import TagCute from '../TagCute';
import TitleCute from '../TitleCute';
import { WrapperThumb } from '../ThumbCute/styles';
import DescriptionCute from '../DescriptionCute';

export const Text = styled.div`
  padding-top: 10rem;
  max-width: 45%;

  ${TagCute} {
    margin-bottom: 35rem;
  }

  ${TitleCute} {
    margin-bottom: 20rem;
  }

  @media (max-width: 1100px) {
    box-sizing: border-box;
    max-width: none;
    justify-content: center;

    & > ${TagCute} {
      margin-top: 20rem;
      width: 300rem;
      text-align: center;
    }

    & > ${TitleCute}, & > ${DescriptionCute} {
      display: none;
    }
  }
`;

export const BannerStyle = styled.section`
  ${container};
  display: flex;
  justify-content: space-between;
  max-height: 70vh;
  height: 100vh;
  align-items: center;

  @media (max-width: 1100px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 50rem;
    max-height: 55vh;

    & ${WrapperThumb} {
      width: 500px;
    }
  }
`;
