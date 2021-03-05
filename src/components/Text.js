import styled, { css } from 'styled-components'

export const HeaderText = styled.h4`
  color: salmon;
  padding: 10px;

  ${props =>
    props.white &&
    css`
      color: white;
    `};
`