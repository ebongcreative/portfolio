import { SCREEN } from '@/constant/style.const'
import styled from 'styled-components'

export const TitleStyled = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-transform: capitalize;
`
export const SubtitleStyled = styled.h3`
  font-size: 18px;
`

export const FigureStyled = styled.figure`
  width: 100%;
  max-width: 50%;
  @media screen and (min-width: ${SCREEN.md}){
    width: 25%;
  }
  margin: 16px;
`
