import { SCREEN } from '@/constant/style.const'
import styled from 'styled-components'

export const ContainerStyled = styled.section<{ bordered?: boolean }>(
  ({ bordered }) => `
  flex-grow: 1;
  height: 100vh;
  position: relative;
  padding-bottom: 60px;
  justify-content: center;
  display: flex;
  flex-direction column;
  padding-top: 60px;
  overflow-y: auto;
  ${
    bordered
      ? `
    outline: 2px dashed red;
    outline-offset: -1px;
    `
      : undefined
  }
`
)

export const BoxedStyled = styled.section<{paddingTop?: number}>`
  margin: 0 auto;
  height: 100%;
  padding: ${({paddingTop = 30}) =>  paddingTop}px 35px 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  max-width: 100%;
  @media screen and (min-width: ${SCREEN.md}) {
    width: 100%;
    max-width: ${SCREEN.xl};
  }
  overflow-y: auto;
`

export const SectionTitleStyled = styled.h3`
  letter-spacing: 5.08px;
  font-weight: 900;
  line-height: 0.75;
  text-transform: uppercase;
  font-size: 3em;
  font-family: var(--display-font);
  opacity: 0.6;
  position: absolute;
  right: 0;
  top: 0;
  color: var(--primary-accent);
  margin: 20px;
  max-width: 350px;
  text-align: right;
  letter-spacing: -0.025em;
  background: linear-gradient(to bottom, var(--primary) 60%, transparent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`

export const FloatingButtonStyled = styled.div`
  transition: var(--fade-in);
  box-shadow: var(--beam-shadow);
  background: var(--bg);
  font-size: 18px;
  border: 2px solid var(--bg-accent);
  &:hover {
    @media screen and (min-width: 768px) {
      transform: translate(-2px, -2px);
    }
  }
`

export const ListItemStyled = styled.li`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
  margin: 0;
  padding: 8px;
  & > a {
    &:hover {
      color: var(--primary-accent);
    }
  }
`

export const ListStyled = styled.ul`
  display: flex;
  column-gap: 20px;
  align-items: center;
  
  &.list-row {
    flex-direction: row;
    flex-wrap: wrap;
  }
  &.list-col {
    flex-direction: column;
    flex-wrap: wrap;
  }
  `
  export const BottomNavStyled = styled.nav`
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  
  `
