import styled, { css } from 'styled-components'

export const HeaderText = styled.h1`
  color: salmon;

  ${props =>
    props.white &&
    css`
      color: white;
    `};
`