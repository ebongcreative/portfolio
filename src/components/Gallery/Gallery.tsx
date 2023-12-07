import gallery from '@/.data/gallery'
import { PAGES } from '@/types/pages'
import * as _ from 'lodash'
import Accordion from '../Accordion/Accordion'
import BottomNavigation from '../BottomNavigation/bottom_navigation'
import FlexBox from '../FlexBox'
import {
  BottomNavStyled,
  BoxedStyled,
  ContainerStyled,
  SectionTitleStyled,
} from '../common/styled'
import { FigureStyled, GalleryStyled } from './styled'

export default function Gallery() {
  return (
    <>
      <ContainerStyled>
        <SectionTitleStyled>Gallery</SectionTitleStyled>
        <BoxedStyled>
          <FlexBox flexDirection="column" rowGap={20}>
            {Object.entries(gallery).map(([category, content]) => {
              return (
                <GalleryStyled key={`gallery_${category}`}>
                  <Accordion title={category}>
                    <FlexBox flexWrap="wrap" gap={20}>
                      {content.map(({ alt_text, url }, index) => (
                        <FigureStyled key={`gallery_${category}-${index}`}>
                          <img src={url} alt={alt_text} />
                        </FigureStyled>
                      ))}
                    </FlexBox>
                  </Accordion>
                </GalleryStyled>
              )
            })}
          </FlexBox>
        </BoxedStyled>

        <BottomNavStyled>
          <BottomNavigation
            leftSlot={{
              content: _.capitalize(PAGES.PROJECT),
              to: PAGES.PROJECT,
            }}
            rightSlot={{
              content: _.capitalize(PAGES.CONTACT),
              to: PAGES.CONTACT,
            }}
          />
        </BottomNavStyled>
      </ContainerStyled>
    </>
  )
}
