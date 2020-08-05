import styled from 'styled-components';
import container from '../../styles/tools/container';
import TagCute from '../TagCute';

const SectionCute = styled.section`
  ${container}
  padding: 20rem 0;
  text-align: center;

  & > ${TagCute} {
    margin-bottom: 40rem;
  }
`;

export default SectionCute;
