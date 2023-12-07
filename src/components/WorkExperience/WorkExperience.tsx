import work_experience from '@/.data/work_experience'
import { PAGES } from '@/types/pages'
import React from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import BottomNavigation from '../BottomNavigation/bottom_navigation'
import type { TSingleWorkExperience } from './IProps'
import './style.scss'
import { StickyTimelineStyled, StyledPictureHolder, StyledTimelineCard } from './styled'
import {
  BottomNavStyled,
  BoxedStyled,
  ContainerStyled,
  SectionTitleStyled,
} from '../common/styled'
import FlexBox from '../FlexBox/FlexBox'

export default function WorkExperience() {
  const list = Object.entries(work_experience).reverse()

  return (
    <ContainerStyled>
      <SectionTitleStyled>Work Experience</SectionTitleStyled>
      <BoxedStyled paddingTop={0} id={PAGES.WORK_EXP}>
        <div className="timeline-listing">
          {list.map(([year, experiences], yidx) => {
            return (
              <div key={`year_${year}_${yidx}`}>
                <StickyTimelineStyled>
                  <FlexBox justifyContent="flex-end">
                    <h3 className="watermark__text">{year}</h3>
                  </FlexBox>
                </StickyTimelineStyled>
                {experiences.map((data, idx) => (
                  <WorkExperienceCard key={idx} data={data} />
                ))}
              </div>
            )
          })}
        </div>
      </BoxedStyled>
      <BottomNavStyled>
        <BottomNavigation
          leftSlot={{ content: 'About', to: PAGES.ABOUT }}
          rightSlot={{
            content: 'Skills',
            to: PAGES.SKILL,
          }}
        />
      </BottomNavStyled>
    </ContainerStyled>
  )
}

function WorkExperienceCard(props: TSingleWorkExperience) {
  const [image, setImage] = React.useState<string>()
  const { image_url, org, roles, timeline, location, description } = props?.data

  React.useEffect(() => {
    if (image_url) {
      ;(async () => {
        const image = new URL(image_url, window.location.href).href
        setImage(image)
      })()
    }
  }, [image_url])

  return (
    <>
      <StyledTimelineCard>
        <div>
          <ul className="dot-list ">
            <li className="list-item flex-row inline-flex" title={timeline}>
              <AiOutlineCalendar role="presentation" /> {timeline}
            </li>
          </ul>
        </div>
        <p className="work__org mb-1">{org}</p>
        <ul className="flex dot-list meta gap-[4px] flex-wrap items-center">
          {roles?.map((role, roleIdx) => (
            <li className="text-sm list-item" title={role} key={roleIdx}>
              <small>{role}</small>
            </li>
          ))}
        </ul>
        <p className="description text-normal text-xs my-2">{description}</p>

        {image ? (
          <StyledPictureHolder>
            <picture>
              <img alt={`${org} logo`} src={image} />
            </picture>
          </StyledPictureHolder>
        ) : null}
      </StyledTimelineCard>
    </>
  )
}
