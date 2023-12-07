import { BiCaretDown } from 'react-icons/bi'
import { IProps } from './IProps'
import {
  ChildrenContainerStyled,
  FlipButtonStyled,
  TitleStyled,
} from './styled'
import FlexBox from '../FlexBox'

export default function Accordion({ title, children }: IProps) {
  return (
    <>
      <FlexBox
        flexWrap="nowrap"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <TitleStyled>{title}</TitleStyled>
        <FlipButtonStyled>
          <BiCaretDown />
        </FlipButtonStyled>
      </FlexBox>
      <ChildrenContainerStyled>{children}</ChildrenContainerStyled>
    </>
  )
}
