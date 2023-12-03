import usePage from '@/hook/usePage'
import { LINKS } from '@/types/links'
import { PAGES } from '@/types/pages'
import BottomNavigation from '../BottomNavigation/bottom_navigation'
import { ContainerStyled } from '../common/styled'

export function AboutMe() {
  const setPage = usePage().onPageChange

  return (
    <>
      <ContainerStyled>
        <h3 className="section-heading">About Me</h3>
        <section className="boxed_layout">
          {/* ABOUT */}
          <section className="flex-grow flex flex-col py-[30px]  justify-center">
            <div className="">
              <p className="lead prose">
                <span className="block pb-2 pt-4 text-2xl">
                  👋 Nice to meet you.
                </span>
                <span className="block pt-[16px]">
                  Having embarked on my journey in the{' '}
                  <em className="highlight">design</em> and{' '}
                  <em className="highlight">creative</em> industries around six
                  years ago, my foremost ambition has always been to catalyze a
                  profound upheaval in the prevailing norms.
                </span>

                <span className="block">
                  Over the years, I have been fortunate enough to engage with a
                  diverse range of private enterprises and governmental bodies,
                  an experience that has not only bolstered my adeptness but
                  also honed my dexterity. Presently, I stand prepared to
                  assimilate novel knowledge, acclimate to paradigm shifts, and
                  venture far beyond the confines of my conventional comfort
                  zone. These are the very bedrocks of my personal growth,
                  enabling me to flawlessly execute tasks with{' '}
                  <em className="highlight">unrivaled precision</em>.
                </span>
              </p>
            </div>
            {/*Button*/}
            <div className="flex mt-[20px] flex-row-reverse mb-[70px] flex-wrap justify-evenly w-full items-center gap-[30px]">
              <a
                href={LINKS?.CV}
                download
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-lg "
              >
                Download CV
              </a>
              <span className="flex-grow text-center opacity-[.25] font-bold text-lg">
                OR
              </span>
              <button
                className="btn btn-lg"
                onClick={() => setPage && setPage(PAGES.CONTACT)}
              >
                📫 Reach out
              </button>
            </div>
          </section>
        </section>
      </ContainerStyled>
      <div className="absolute bottom-0 w-full text-center left-0">
        <BottomNavigation
          rightSlot={{
            content: 'Work Experience',
            to: PAGES.WORK_EXP,
          }}
        />
      </div>
    </>
  )
}

export default AboutMe
