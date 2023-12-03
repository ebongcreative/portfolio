import Collapsible from '@/components/Collapsible/Collapsible'
import Menu from '@/components/Menu/menu'
import { FloatingButtonStyled, ListStyled } from '@/components/common/styled'
import { SCREEN } from '@/constant/style.const'
import styled from 'styled-components'

export const NavLink = styled('a')(() => ({
  paddingTop: 10,
  paddingBottom: 10,
  fontWeight: 'bold',
  display: 'inline-flex',
  alignItems: 'center',
  flexGrow: 0,
  columnGap: 8,
  opacity: 0.5,
  //   textAlign: 'center'
  ['&:hover']: {
    opacity: 1,
  },
}))

export const TopLeftMenuStyled = styled(Collapsible)`
  position: fixed;
  left: 10px;
  top: 20px;
  z-index: 10;
  @media screen and (max-width: ${SCREEN.md}) {
    left: 20px;
  }
`

export const ContainerStyled = styled('div')(
  () => `
  display: block;
  position: relative;
`
)

export const TopContainerStyled = styled.div`
  z-index: 1;
  position: sticky;
  top: 0;
`

export const BottomContainerStyled = styled.main`
  z-index: 2;
  position: relative;
`

export const ScrollTipStyled = styled.div`
  position: fixed;
  top: -25px;
  right: 10px;
  z-index: 1000;
  transform-origin: bottom right;
  width: 70vh;
  transform: rotate(-90deg);
`
export const ScrollIndicatorStyled = styled.span`
  justify-content: space-evenly;
  user-select: none;
  display: flex;
  margin: auto;
  flex-grow: 1;
  display: flex;
  column-gap: 10px;
  align-items: center;
  color: var(--subtle);
  width: 100vh;
  height: auto;
  text-transform: uppercase;
  text-align: center;
  gap: 30px;
  &::before {
    content: '';
    background: var(--subtle);
    height: 1px;
    opacity: 0;
    position: relative;
    // width: calc(35% - 10px);
    flex: auto;
    z-index: -1;
    // left: 10px;
    // margin-left: auto;
  }

  &::after {
    opacity: 0.75;
    content: '';
    background: var(--subtle);
    height: 1px;
    position: relative;
    flex: auto;
    right: 10px;
    z-index: -1;
  }
  span {
    margin: 0 auto;
  }
`

export const ScrollButtonContainerStyled = styled(FloatingButtonStyled)`
  position: relative;
  height: 70px;
  border-width: 2px;
  width: 30px;
  overflow: hidden;
  border-radius: 8px;
  padding-top: 4px;
`


export const MenuStyled = styled(Menu)`
  left: 60px;
  top: 60px;
  width: 300px;
`

export const SubtitleListStyled = styled(ListStyled)`
  justify-content: center
`
