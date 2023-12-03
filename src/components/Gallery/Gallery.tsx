import { PAGES } from '@/types/pages'
import BottomNavigation from '../BottomNavigation/bottom_navigation'
import { BoxedStyled, ContainerStyled } from '../common/styled'
import * as _ from 'lodash'
import ComingSoon from '../ComingSoon'

export default function Gallery() {
  return (
    <>
      <ContainerStyled>
        <h3 className="section-heading">Gallery</h3>
        <BoxedStyled>
          <ComingSoon/>
        </BoxedStyled>

        <div className="absolute bottom-0 w-full left-0">
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
        </div>
      </ContainerStyled>
    </>
  )
}
