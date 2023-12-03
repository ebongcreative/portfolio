import MePng from '@/assets/me.png'
import MotionSensitiveImage from '../MotionSensitiveImage/MotionSensitiveImage'
import { ListStyled } from '../common/styled'
import { IProps } from './IProps'
import {
  ChildrenStyled,
  ContainerStyled,
  ContentStyled,
  FigureStyled,
  HeaderStyled,
  ListItemStyled,
  SubTitleStyled,
  TitleStyled,
} from './styled'

export function Hero({
  mainTitle = <></>,
  subTitle = <></>,
  contactLinks = [],
  children,
}: IProps) {
  return (
    <ContainerStyled id="page_hero">
      <FigureStyled aria-label="Ebong, Utibe hero image">
        <MotionSensitiveImage src={'/me.png'} alt="Ebong, Utibe" />
      </FigureStyled>

      <ContentStyled>
        <HeaderStyled flexDirection="column" justifyContent="center">
          <TitleStyled>
            {/* <div className="before-title"></div> */}
            {mainTitle}
            {/* <div className="after-title"></div> */}
          </TitleStyled>
          <SubTitleStyled>{subTitle}</SubTitleStyled>
        </HeaderStyled>

        <ListStyled>
          {contactLinks.map((content, idx) => (
            <ListItemStyled key={idx}>{content}</ListItemStyled>
          ))}
        </ListStyled>
        <ChildrenStyled>{children}</ChildrenStyled>
      </ContentStyled>
    </ContainerStyled>
  )
}
export default Hero
