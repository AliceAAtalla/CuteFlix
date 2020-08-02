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
  border-top: 4px solid var(--color-red-light);

  & > ${LogoCute} {
    margin-bottom: 20rem;
  }
`;

export default FooterCute;
