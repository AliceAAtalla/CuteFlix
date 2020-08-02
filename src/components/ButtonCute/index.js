import styled from 'styled-components';

const ButtonCute = styled.button`
  background-color: var(--color-red-light);
  border: 1px solid var(--color-green-blue);
  border-radius: 4px;
  color: var(--color-light);
  cursor: pointer;
  font-size: 15rem;
  font-weight: 600;
  padding: 12rem 23rem;
  transform: scale(1);
  transition: transform 300ms linear;
  
  &:hover {
    transition: transform 300ms linear;
    transform: scale(1.1);
  }
`;

export default ButtonCute;
