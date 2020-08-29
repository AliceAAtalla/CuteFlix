import styled from 'styled-components';
import container from '../../styles/tools/container';
import TagCute from '../TagCute';
import TitleCute from '../TitleCute';
import { WrapperThumb } from '../ThumbCute/styles';
import DescriptionCute from '../DescriptionCute';

export const Text = styled.div`
  padding-top: 10rem;
  max-width: 45%;

  & > ${TagCute} {
    margin-bottom: 35rem;
  }

  & > ${TitleCute} {
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

  @media (max-width: 500px) {
    & > ${TagCute} {
      width: 55vw;
      font-size: 20rem;
    }
  }
`;

export const BannerStyle = styled.section`
  ${container};
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  height: auto;
  margin: 30rem;

  @media (max-width: 1100px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 60rem;
    max-height: 80vh;

    & ${WrapperThumb} {
      width: 650px;
    }
  }

  @media (max-width: 800px) {
    & ${WrapperThumb} {
      width: 80vw;
    }
  }
`;
