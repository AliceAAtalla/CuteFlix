import styled from 'styled-components';
import LogoAnima from '../LogoAnima';

const FooterAnima = styled.footer`
  display: flex;
  flex-direction:column;
  align-items: center;
  background-color: var(--color-blue-light);
  color: var(--color-blue-dark);
  font-size: 14rem;
  padding: 20rem 0;
  border-top: 4px solid var(--color-red-light);

  & > ${LogoAnima} {
    margin-bottom: 20rem;
  }
`;

export default FooterAnima;
