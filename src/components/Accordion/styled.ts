import { SCREEN } from '@/constant/style.const'
import styled from 'styled-components'

export const FlipButtonStyled = styled.button`
  appearance: none;
  padding: 0 8px;
  background-color: var(--text-contrast);
  border-radius: 8px;
`

export const TitleStyled = styled.h1`
  font-style: normal;
  font-weight: bolder;
  font-size: 20px;
  line-height: 1;
  text-transform: uppercase;
  position: relative;
  color: var(--text-color);
  text-shadow: 2px 2px 2px var(--text-contrast);
  font-family: var(--display-font);
  user-select: none;
  display: block;
  margin-bottom: 16px;
  @media screen and (min-width: ${SCREEN.md}) {
    font-size: 25px;
  }
`

export const ChildrenContainerStyled = styled.section`
  margin-top: 8px;
`
