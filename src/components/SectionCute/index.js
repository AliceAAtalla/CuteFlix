import styled from 'styled-components';
import TagCute from '../TagCute';

const SectionCute = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 50rem;
  text-align: center;
  padding-top: 20rem;

  & > ${TagCute} {
    align-self: flex-start;
    margin-left: 30rem;
    margin-bottom: 20rem;
  }
`;

export default SectionCute;
