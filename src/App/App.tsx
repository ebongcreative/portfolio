import AboutMe from '@/components/AboutMe'
import Certifications from '@/components/Certifications'
import ContactMe from '@/components/ContactMe'
import FlexBox from '@/components/FlexBox'
import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import Menu from '@/components/Menu/menu'
import Projects from '@/components/Projects'
import ScrollButton from '@/components/ScrollButton'
import Skills from '@/components/Skills/skills'
import Tab from '@/components/Tab'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import TypeWriter from '@/components/TypeWriter/type_writer'
import WorkExperience from '@/components/WorkExperience'
import { ListItemStyled } from '@/components/common/styled'
import { CONTACT_LINKS } from '@/constant/contact'
import usePage from '@/hook/usePage'
import useTheme from '@/hook/useTheme'
import '@/styles/index.scss'
import { PAGES } from '@/types/pages'
import '@fontsource/alexandria/200.css'
import '@fontsource/alexandria/300.css'
import '@fontsource/anonymous-pro'
import '@fontsource/bakbak-one'
import 'animate.css'
import cn from 'classnames'
import React, { createRef, useEffect } from 'react'
import { Poppable } from 'webrix/components'
import {
  BottomContainerStyled,
  ContainerStyled,
  MenuStyled,
  NavLink,
  ScrollButtonContainerStyled,
  ScrollIndicatorStyled,
  ScrollTipStyled,
  SubtitleListStyled,
  TopContainerStyled,
  TopLeftMenuStyled,
} from './styled'

const GAP = 5

const tab: {
  [t in PAGES]: { title: JSX.Element | null; content: () => JSX.Element | null }
} = {
  [PAGES.ABOUT]: {
    title: <p>About Me</p>,
    content: AboutMe,
  },

  [PAGES.WORK_EXP]: {
    title: <p>Work Experience</p>,
    content: WorkExperience,
  },
  [PAGES.SKILL]: {
    title: <p>{PAGES.SKILL}</p>,
    content: Skills,
  },
  [PAGES.CERT]: {
    title: <p>{PAGES.CERT}</p>,
    content: Certifications,
  },
  [PAGES.PROJECT]: {
    title: <p>{PAGES.PROJECT}</p>,
    content: Projects,
  },
  [PAGES.GALLERY]: {
    title: <p>{PAGES.GALLERY}</p>,
    content: Gallery,
  },
  [PAGES.CONTACT]: {
    title: <p>Contact</p>,
    content: ContactMe,
  },
}

// MAIN APP
function App() {
  const theme = useTheme()
  const { activePage, onPageChange } = usePage()
  const scrollRef = createRef<HTMLDivElement>()
  const currentPageRef = React.useRef<PAGES>()
  const menuContainerRef = React.createRef<HTMLDivElement>()

  useEffect(() => {
    const body = document?.body
    if (theme && body) {
      body?.setAttribute('data-theme', theme?.mode)
    }
  }, [theme])

  useEffect(() => {
    const cpr = currentPageRef.current,
      sr = scrollRef.current
    if (activePage && sr) {
      if (cpr) {
        if (cpr != activePage) {
          currentPageRef.current = activePage
          scrollRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      } else {
        currentPageRef.current = activePage
        scrollRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }
  }, [activePage, scrollRef])

  const RenderTabContent = React.useCallback(() => {
    const page: PAGES = activePage ? activePage : PAGES.ABOUT

    const value = tab[page]
    const key = page

    return (
      <div className="h-full flex-grow m-auto">
        <value.content key={`tab_body_${key}`} />
      </div>
    )
  }, [activePage])

  const isMenuItemActive = React.useCallback(
    (itemId: PAGES) => {
      return activePage == itemId
    },
    [activePage]
  )

  const menu_placement = React.useCallback((rbr: DOMRect, tbr: DOMRect) => {
    const { vbefore, vcenter, vafter, hbefore, hcenter, hafter } =
      Poppable.Placements

    return [
      { ...vbefore(rbr, tbr, -GAP), ...hbefore(rbr, tbr, -GAP) }, // Top left
      { ...vbefore(rbr, tbr, -GAP), ...hcenter(rbr, tbr) }, // Top center
      { ...vbefore(rbr, tbr, -GAP), ...hafter(rbr, tbr, -GAP) }, // Top right
      { ...vafter(rbr, tbr, GAP), ...hbefore(rbr, tbr, -GAP) }, // Bottom left
      { ...vafter(rbr, tbr, GAP), ...hcenter(rbr, tbr) }, // Bottom center
      { ...vafter(rbr, tbr, GAP), ...hafter(rbr, tbr, -GAP) }, // Bottom left
      { ...vcenter(rbr, tbr), ...hbefore(rbr, tbr, -GAP) }, // Center left
      { ...vcenter(rbr, tbr), ...hafter(rbr, tbr, -GAP) }, // Center right
    ]
  }, [])

  return (
    <>
      <ContainerStyled role="presentation">
        <TopLeftMenuStyled ref={menuContainerRef}>
          <FlexBox flexDirection="column" gap={10} alignItems="center">
            <ThemeSwitcher onChange={theme.onToggle} mode={theme?.mode} />

            <MenuStyled
              placement={{ initial: 6, area: menu_placement }}
              container={menuContainerRef}
            >
              <div role="presentation">
                {Object.entries(tab).map(([id, { title }]) => (
                  <Menu.Item
                    role="menuitem"
                    key={id}
                    text={title && title}
                    title={id}
                    tabIndex={0}
                    aria-readonly
                    onClick={() => {
                      onPageChange(id as PAGES)
                    }}
                    active={isMenuItemActive(id as PAGES)}
                  />
                ))}
              </div>
            </MenuStyled>

            <ScrollButtonContainerStyled>
              <ScrollButton />
            </ScrollButtonContainerStyled>
          </FlexBox>
        </TopLeftMenuStyled>

        <TopContainerStyled>
          <Hero
            mainTitle="Ebong Utibe"
            subTitle={
              <SubtitleListStyled>
                <ListItemStyled>
                  <TypeWriter
                    speed={1000}
                    loop
                    text={[
                      [
                        `Industrial_Designer`,
                        `2D_Artist/Modeler`,
                        `Civil_Engineer`,
                      ],
                      [
                        'Maya',
                        '3Ds_Max',
                        'Plasticity',
                        'Cascardeur',
                        'Marvelous_Designer',
                        'Substance_Painter',
                        'Fusion',
                        'Houdini',
                        'Vray 5',
                        'Corona',
                        'Redshift',
                        'Arnold',
                        'Catia',
                        'Autodesk_AutoCAD',
                        'Keyshot',
                        'Revit_Architecture',
                        'AutoCAD.',
                      ],
                    ]}
                  />
                </ListItemStyled>
              </SubtitleListStyled>
            }
            contactLinks={CONTACT_LINKS}
          >
            <div className="boxed_layout flex-column flex items-center">
              <div className="flex flex-row justify-evenly w-full items-center mt-[100px] flex-wrap gap-2">
                <NavLink
                  href={`#${PAGES.WORK_EXP}`}
                  className={cn('nav-link', 'px-4 flex-grow-0 text-center')}
                  onClick={() => onPageChange(PAGES.WORK_EXP)}
                >
                  Work Experience
                </NavLink>

                <NavLink
                  href={`#${PAGES.PROJECT}`}
                  className={cn('nav-link', 'px-4 flex-grow-0 text-center')}
                  title="Go to projects"
                  onClick={() => onPageChange(PAGES.PROJECT)}
                >
                  Projects
                </NavLink>

                <NavLink
                  href={`#${PAGES.GALLERY}`}
                  className={cn('nav-link', 'px-4 flex-grow-0 text-center')}
                  onClick={() => onPageChange(PAGES.GALLERY)}
                >
                  Gallery
                </NavLink>
              </div>
            </div>
          </Hero>
        </TopContainerStyled>

        <BottomContainerStyled id="main-content" className="hidden_scrollbar">
          <Tab>
            {(): JSX.Element => {
              return (
                <div className="md:flex-auto w-full relative z-[1] flex flex-col meta_box-right max-h-screen">
                  <div
                    ref={scrollRef}
                    className="flex z-[1] flex-grow  overflow-y-auto hidden_scrollbar md:flex-nowrap flex-wrap"
                  >
                    <div className="z-0 relative w-full h-full overflow-y-auto hidden_scrollbar">
                      <RenderTabContent />
                    </div>
                  </div>
                </div>
              )
            }}
          </Tab>
        </BottomContainerStyled>

        <ScrollTipStyled>
          <ScrollIndicatorStyled>
            <span>KEEP SCROLLING</span>
          </ScrollIndicatorStyled>
        </ScrollTipStyled>
      </ContainerStyled>
    </>
  )
}

export default App
