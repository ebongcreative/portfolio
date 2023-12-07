import { CONTACT_LINKS } from '@/constant/contact'
import { PAGES } from '@/types/pages'
import BottomNavigation from '../BottomNavigation/bottom_navigation'
import styles from './style.module.scss'
import cl from 'classnames'
import {
  BottomNavStyled,
  BoxedStyled,
  ContainerStyled,
  SectionTitleStyled,
} from '../common/styled'
import * as _ from 'lodash'

export function ContactMe() {
  return (
    <>
      <ContainerStyled>
        <SectionTitleStyled>Contact</SectionTitleStyled>
        <BoxedStyled>
          <div className="flex flex-col self-center w-full h-full justify-center gap-[20px] items-center py-[30px]">
            <header className="flex flex-col gap-x-[10px] my-[30px] grow items-center justify-center w-full mx-[30px]">
              <p className="text-[4rem]">👋</p>
              <p className={cl(styles.title, 'text-center mb-4')}>
                Nice to meet you!
              </p>
              <p>Do reach out to me using the following</p>
              <ul className="list mt-[60px] gap-[30px]">
                {CONTACT_LINKS?.map((item, idx) => (
                  <li className="list-item social_icon" key={idx}>
                    {item}
                  </li>
                ))}
              </ul>
            </header>
            <button type="submit" className="btn btn-outline btn-lg">
              <a href="mailto:ebongutibe@gmail.com">Get in touch</a>
            </button>
          </div>
        </BoxedStyled>
      </ContainerStyled>
      
      <BottomNavStyled>
        <BottomNavigation
          leftSlot={{ content: _.capitalize(PAGES.GALLERY), to: PAGES.GALLERY }}
          rightComponent={<></>}
        />
      </BottomNavStyled>
    </>
  )
}
export default ContactMe
