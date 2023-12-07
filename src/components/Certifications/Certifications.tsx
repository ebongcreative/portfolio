import certifications from '@/.data/certifications'
import { PAGES } from '@/types/pages'
import { RiExternalLinkLine } from 'react-icons/ri'
import BottomNavigation from '../BottomNavigation/bottom_navigation'
import { BottomNavStyled, BoxedStyled, ContainerStyled, SectionTitleStyled } from '../common/styled'
import './style.scss'

export function Certifications() {
  return (
    <ContainerStyled>
      <SectionTitleStyled>Certification</SectionTitleStyled>
      <BoxedStyled>
        <ul className="lg:columns-2 gap-[20px] py-[30px] flex-grow ">
          {certifications?.map(({ name, timeline, link }, idx) => (
            <li key={idx} className={`card mb-[20px]`}>
              <div>
                <p className="cert__title mb-1">{name}</p>
                <ul className="dot-list meta opacity-60 font-medium">
                  <li className="list-item" title={timeline}>
                    {timeline}
                  </li>
                </ul>
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit external link: ${link}`}
                  className="absolute right-[30px] top-[30px]"
                >
                  <RiExternalLinkLine role="presentation" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </BoxedStyled>

      <BottomNavStyled>
        <BottomNavigation
          leftSlot={{ content: 'Skills', to: PAGES.SKILL }}
          rightSlot={{
            content: 'Projects',
            to: PAGES.PROJECT,
          }}
        />
      </BottomNavStyled>
    </ContainerStyled>
  )
}

export default Certifications
