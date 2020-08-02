import styled from 'styled-components';

export const Avatar = styled.img`
  position: absolute;
  top: var(--space);
  left: var(--space);
  width: 50rem;
  height: 50rem;
  border-radius: 50%;
  border: 1px solid var(--color-video-1);
  transform: translateX(calc((100% + var(--space)) * -1));
  opacity: 0;
  transition: transform 200ms linear, opacity 100ms linear;
  `;

export const Thumb = styled.img`
  width: 100%;
  `;

export const WrapperThumb = styled.figure`
  --space: 10rem;
  position: relative;
  border-radius: 4rem;
  border: 4rem solid var(--color-video-1);
  width: 550px;
  overflow:hidden;
  transition: transform 100ms linear;

  &:hover {
    --move: calc((var(--space) * -1));
    transform: translate(var(--move), var(--move));
    transition: transform 100ms linear;

    & > ${Avatar} {
      transform: translateX(0);
      opacity: 1;
      transition: transform 100ms 150ms linear, opacity 300ms 150ms linear;
    }
  }
`;
