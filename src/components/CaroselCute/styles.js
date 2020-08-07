import styled from 'styled-components';
import { WrapperThumb, Background } from '../ThumbCute/styles';
import arrow from '../../assets/img/arrow.svg';

export const Right = styled.button`
  position: absolute;
  height: calc(100% - var(--space-top) * 2);
  width: 50rem;
  right: 0;
  opacity: 0;
  border: none;
  background-color: var(--color-video-3);
  transition: opacity 200ms linear, transform 200ms linear;
  cursor: pointer;

  &::after {
    content: url(${arrow});
    display: inline-block;
    transform: rotate(180deg);
    opacity: 1;
    transition: transform 100ms linear;
  }

  &:active::after {
    transform: rotate(180deg) translateX(4rem);
  }
`;

export const CarouselStyle = styled.div`
  --space-top: 20rem;

  position: relative;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  align-self: flex-start;
  width: 100%;
  padding: var(--space-top) 30rem;
  overflow: hidden;

  & > ${Background} {
    margin-right: 25rem;
  }

  & ${WrapperThumb} {
    width: 400rem;
  }

  &:hover > ${Right} {
    opacity: 0.5;
  }

  & > ${Right}:hover {
    transform-origin: right center;
    opacity: 0.7;
  }

  & > ${Right}:focus {
    outline: none;
  }
`;