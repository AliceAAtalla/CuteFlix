import styled from 'styled-components';
import { WrapperAvatar } from '../AvatarCute/styles';

export const Timer = styled.span`
  position: absolute;
  right: var(--space);
  bottom: var(--space);
  font-size: 18rem;
  background-color: var(--color-video-3);
  padding: 2rem 4rem;
  color: var(--color-light);
  opacity: 0;
  transition: opacity 100ms linear;
`;

export const Title = styled.figcaption`
  position: absolute;
  text-shadow: 1.2px 1.2px var(--color-blue-dark);
  bottom: var(--space);
  left: var(--space);
  font-weight: 300;
  font-size: 23rem;
  color: var(--color-video-title);
  padding: var(--border) 6rem;
  transform: translateX(calc(100% + var(--space)));
  opacity: 0;
  transition: var(--transition);
`;

export const Thumb = styled.img`
  width: 100%;
  transition: filter 100ms linear;
`;

export const WrapperThumb = styled.figure`
  position: relative;
  border: var(--border) solid var(--color-video-5);
  width: 550px;
  overflow: hidden;
  transition: transform 100ms linear;

  & > ${WrapperAvatar} {
    position: absolute;
    top: var(--space);
    left: var(--space);
    margin-right: var(--space);
    transform: translateX(calc((100% + var(--space)) * -1));
    opacity: 0;
    transition: var(--transition);
  }
`;

export const Background = styled.div`
  /* Variaveis */
  --border: 4rem;
  --space: 10rem;
  --border-animation: calc((var(--space) + var(--border)));
  --move-space: calc((var(--space) * -1));
  --transition: transform 200ms linear, opacity 100ms linear;
  --transition-hover: transform 350ms 200ms linear, opacity 300ms 200ms linear;
  /* -------- */
  display: inline-block;
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

      & > ${Thumb} {
        filter: brightness(0.9);
      }

      & > ${WrapperAvatar} {
        transform: translateX(0);
        opacity: 1;
        transition: var(--transition-hover);
      }

      & > ${Title} {
        transform: translateX(0);
        opacity: 1;
        transition: var(--transition-hover);
      }

      & > ${Timer} {
        opacity: 1;
        transition: opacity 300ms 550ms linear;
      }
    }
  }
`;
