import styled from 'styled-components';

export const Avatar = styled.img`
  position: absolute;
  top: var(--space);
  left: var(--space);
  width: 50rem;
  height: 50rem;
  border-radius: 50%;
  border: 1px solid var(--color-blue-dark);
  transform: translateX(calc((100% + var(--space)) * -1));
  opacity: 0;
  transition: transform 200ms linear, opacity 100ms linear;
`;

export const Thumb = styled.img`
  width: 100%;
`;

export const WrapperThumb = styled.figure`
  position: relative;
  border: var(--border) solid var(--color-video-3);
  width: 550px;
  overflow: hidden;
  transition: transform 100ms linear;
`;

export const Background = styled.div`
  --border: 4rem;
  --space: 10rem;
  --border-animation: calc((var(--space) + var(--border)));
  --move-space: calc((var(--space) * -1));

  background-color: var(--color-video-3);
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: var(--border-animation);
    height: var(--border-animation);
    background-color: var(--color-video-3);
    transition: transform 100ms linear;
  }

  &::before {
    right: 0;
    top: 0;
    transform-origin: right top;
    transform: rotate(45deg) scale(0);
  }

  &::after {
    z-index: -1;
    left: 0;
    bottom: 0;
    transform-origin: left bottom;
    transform: rotate(-45deg) scale(0);
  }

  &:hover {
    &:before {
      transform: rotate(45deg) scale(1);
    }

    &::after {
      transform: rotate(-45deg) scale(1);
    }

    & > ${WrapperThumb} {
      transform: translate(var(--move-space), var(--move-space));

      & > ${Avatar} {
        transform: translateX(0);
        opacity: 1;
        transition: transform 100ms 150ms linear, opacity 300ms 150ms linear;
      }
    }
  }
`;
