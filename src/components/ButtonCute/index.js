import styled from 'styled-components';

const ButtonCute = styled.button`
  --transition-transform: transform 100ms linear, background-color 200ms linear;

  background-color: var(--color-red-light);
  border: 1px solid var(--color-blue-light);
  border-radius: 4px;
  color: var(--color-light);
  cursor: pointer;
  font-size: 15rem;
  font-weight: 600;
  padding: 12rem 23rem;
  transform: scale(1);
  transition: var(--transition-transform);

  &:hover {
    transition: var(--transition-transform);
    transform: scale(1.1);
    background-color: var(--color-green-blue);
  }

  &:active {
    transition: var(--transition-transform);
    transform: scale(0.9);
  }

  &:focus {
    outline-style: none;
  }
`;

export default ButtonCute;
