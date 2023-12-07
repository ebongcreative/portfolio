import { SCREEN } from '@/constant/style.const'
import styled from 'styled-components'

export const StyledPictureHolder = styled.figure`
  background: #fff;
  position: absolute;
  left: 0;
  margin-left: 20px;
  top: 0;
  margin-top: -40px;
  width: 100px;
  height: 100px;
  max-height: 100px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  /* border: 2px solid var(--primary); */
  box-shadow: 0 0 70px -30px var(--primary);
  border-radius: 8px;
  padding: 8px 12px;
  border: 4px solid transparent;

  @media screen and (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`

export const WatermarkedTitleStyled = styled.div`
  font-weight: 300;
  transition: var(--fade-in);
  font-family: var(--code-font);
  opacity: 0.1;
  user-select: none;
  z-index: 0;
  font-size: 70px;

  @media screen and (min-width: ${SCREEN.md}) {
    font-size: 100px;
  }
`

export const StickyTimelineStyled = styled.div`
  position: sticky;
  top: 0px;
  margin-top: -70px;
`

export const StyledTimelineCard = styled.div`
  position: relative;
  margin-bottom: 60px;
  z-index: 4;
  user-select: none;
  position: relative;
  padding: 50px 25px 25px;
  color: var(--text-color);
  transition: var(--fade-in);
  border-radius: 8px;
  box-sizing: border-box;
  /* box-shadow: -10px 10px 4px -10px var(--bg-accent),
    -10px 20px 30px -10px var(--bg-accent); */
  @media screen and (min-width: ${SCREEN.md}) {
    padding: 75px 25px 25px;
  }
  .description {
    color: inherit;
    line-height: 1.5;
    opacity: 0.75;
  }
  &:before {
    left: -20px;
    width: 20px;
    top: 30px;
    background-color: var(--bg-accent);
    height: 4px;
    content: '';
    font-size: 40px;
    position: absolute;
    transition: var(--fade-in);
    z-index: -1;
    mix-blend-mode: overlay;
    border-radius: inherit;
  }
  &:after {
    border-radius: inherit;
    left: 0;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: var(--bg-accent);
    background: linear-gradient(to right, var(--bg-accent), transparent);
    content: '';
    font-size: 40px;
    position: absolute;
    transition: background 0.5s ease-in-out;
    z-index: -1;
    // filter: blur(20%);
    // opacity: 0.35;
    mix-blend-mode: overlay;
  }
  .meta {
    // background: var(--bg);
    padding: 4px 0px;
    // margin-left: -30px;
    transition: var(--fade-in);
    // box-shadow: var(--beam-shadow);
    border-radius: 8px;
    z-index: 1;
    color: var(--text-color);
    opacity: 0.5;
  }

  /* &:hover {
    // transform: translate(0);
    &:after {
      animation-name: headShake;
      border: 4px solid var(--primary);
    }

    .meta {
      margin-left: 0;
      opacity: 1;
    }
    &:before {
      // width: 15px;
      @media screen and (min-width: 768px) {
        // transform: translateX(15px);
      }
      background-color: var(--primary);
    }
  } */

  .work__org {
    font-style: normal;
    font-size: 20px;
    line-height: 26px;
    opacity: var(--opacity);
    font-weight: 700;
    font-size: 20px;
    max-width: 85%;
    user-select: none;
    letter-spacing: 0.005rem;
  }
  /* &:hover ${StyledPictureHolder} {
    border-color: var(--primary);
    /* background: #fff; 
  } */
`
