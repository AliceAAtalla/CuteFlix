import styled from 'styled-components';

export const Channel = styled.figcaption`
  font-size: 20rem;
  margin-left: var(--space);
  color: var(--color-video-title);
  text-shadow: 1.2px 1.2px var(--color-blue-dark);
`;

export const Avatar = styled.img`
  width: 50rem;
  height: 50rem;
  border-radius: 50%;
  border: 2px solid var(--color-blue-dark);
`;

export const WrapperAvatar = styled.figure`
  display: flex;
  align-items: center;
`;
