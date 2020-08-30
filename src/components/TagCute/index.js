import styled, { css } from 'styled-components';

const TagCute = styled.h2`
  display: inline-block;
  border-radius: 4rem;
  font-size: 20rem;
  padding: 20rem 18rem;
  color: var(--color-light);

  ${(props) =>
    props.title &&
    css`
      background-color: var(--color-red-light);
    `}
  ${(props) =>
    props.first &&
    css`
      background-color: var(--color-blue-dark);
    `}
  ${(props) =>
    props.second &&
    css`
      background-color: var(--color-green-blue);
    `}
  ${(props) =>
    props.third &&
    css`
      background-color: var(--color-video-5);
    `}
  ${(props) =>
    props.fourth &&
    css`
      background-color: var(--color-video-4);
    `}
`;

export default TagCute;
