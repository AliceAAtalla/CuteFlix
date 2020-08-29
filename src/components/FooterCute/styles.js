import styled from 'styled-components';
import LogoCute from '../LogoCute';

const FooterCute = styled.footer`
  display: flex;
  flex-direction:column;
  align-items: center;
  background-color: var(--color-blue-light);
  color: var(--color-blue-dark);
  font-size: 14rem;
  padding: 20rem 0;
  box-shadow: inset 0px 4px 30px 2px var(--color-green-blue);

  & > ${LogoCute} {
    margin-bottom: 20rem;7
    height: 80rem;
  }
`;

export default FooterCute;
