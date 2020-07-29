import styled from 'styled-components';
import ButtonAnima from '../ButtonAnima';
import LogoAnima from '../LogoAnima';

const HeaderAnima = styled.header`
display: flex;
justify-content:space-between;
align-items:center;
  padding: 30px 40px;
  background-color: var(--color-blue-light);
  border-bottom: 4px solid var(--color-red-light);

  @media(max-width: 800px) {
    justify-content: center;
    padding: 15px 16px;

    & > ${LogoAnima} {
      height: 35rem;
    }
    
    & > ${ButtonAnima} {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100vw;
      border: none;
      border-radius: 0;
    }
  }
`;

export default HeaderAnima;
