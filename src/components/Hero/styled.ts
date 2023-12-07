import styled from 'styled-components'
import FlexBox from '../FlexBox'
import { ListItemStyled as _ListItemStyled } from '../common/styled'
import { SCREEN } from '@/constant/style.const'

export const ContainerStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--bg);
  transition: var(--fade-in);
  z-index: 0;
  overflow: hidden;
  flex-wrap: nowrap;
`

export const FigureStyled = styled.figure`
  position: absolute;
  z-index: 0;
  margin: 0 auto;
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 100%;
  margin-top: -30%;

  @media screen and (min-width: ${SCREEN.md}) {
    margin-top: -10%;
  }
  img {
    max-width: 95%;
    @media screen and (min-width: ${SCREEN.md}) {
      max-width: 70%;
    }

    @media screen and (min-width: ${SCREEN.lg}) {
      max-width: 50%;
    }
  }
`

export const HeaderStyled = styled(FlexBox)`
  margin: 0 auto;
  text-align: center;
`

export const TitleStyled = styled.h1`
  --slid_width: 10%;
  font-style: normal;
  font-weight: bolder;
  font-size: 70px;
  line-height: 1;
  text-transform: uppercase;
  text-align: center;
  position: relative;
  color: var(--text-color);
  text-shadow: 2px 2px 2px var(--text-contrast);
  font-family: var(--display-font);
  user-select: none;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  .before-title {
    content: '';
    height: 2px;
    background-color: var(--text-color);
    position: relative;
    margin: 20px auto;
    transition: var(--fade-in);
    // left: -10%;
    // width: 120%;
    &::before {
      content: '';
      background-color: currentColor;
      position: absolute;
      top: -8px;
      transition: var(--fade-in);
      width: var(--slid_width);
      height: 8px;
      left: 0px;
    }
  }
  &:hover {
    .before-title {
      &::before {
        transform: skew(45deg, 0deg) translate(-5px, 1px);
      }
    }
    .after-title {
      &::before {
        transform: skew(45deg, 0deg) translate(5px, -1px);
      }
    }
  }
  .after-title {
    content: '';
    height: 2px;
    margin: 20px auto;
    position: relative;
    background-color: var(--text-color);

    &::before {
      transition: var(--fade-in);
      display: block;
      content: '';
      background: currentColor;
      position: absolute;
      bottom: -8px;
      width: var(--slid_width);
      height: 8px;
      right: 0px;
    }
  }
`

export const ContentStyled = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  gap: 15px;
  margin-top: 50vh;

  @media (prefers-color-scheme: dark) {
    background: none;
  }

  width: 100%;
  @media screen and (max-width: 500px) {
    margin-top: 40vh;
    padding-bottom: 70px;
  }
`

export const ChildrenStyled = styled.div`
  position: absolute;
  bottom: -70px;
  @media screen and (min-width: ${SCREEN.md}) {
    bottom: -100px;
  }
  width: 100%;
`
export const ListItemStyled = styled(_ListItemStyled)`
  font-size: 30px;
`

export const SubTitleStyled = styled('div')`
  font-weight: 200;
  font-size: 18px;
  text-align: center;
`
