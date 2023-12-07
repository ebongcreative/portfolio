import styles from './style.module.scss'
import skills from '@/.data/skills'
import { PAGES } from '@/types/pages'
import BottomNavigation from '../BottomNavigation/bottom_navigation'
import {
  BottomNavStyled,
  BoxedStyled,
  ContainerStyled,
  SectionTitleStyled,
} from '../common/styled'
import FlexBox from '../FlexBox'

interface TechnicalSkillInterface {
  name: string
  tools?: Array<SkillDataToolInterface>
  level?: string
  icon?: string
}

interface SkillDataToolInterface {
  name: string
  level?: string
}

export default function Skills() {
  return (
    <ContainerStyled>
      <SectionTitleStyled>Skills</SectionTitleStyled>
      <BoxedStyled>
        <FlexBox flexDirection="column" gap={30}>
          {Object.entries(skills)?.map(
            ([key, value]: [key: string, value?: Array<any>], indx) => (
              <ul key={indx} className="flex flex-col gap-[15px] ">
                <li>
                  <p className={`capitalize  ${styles.title}`}>
                    {key?.replace(/[-_]/g, ' ')}
                  </p>
                </li>
                {value?.length ? (
                  <li>
                    {(() => {
                      switch (key) {
                        case 'technical-skills': {
                          return (
                            <div className="w-[100vw - 50px]">
                              <ul className="flex flex-wrap gap-[20px]">
                                {value?.map(
                                  (item: TechnicalSkillInterface, idx) => (
                                    <li
                                      key={idx}
                                      className="card skill flex-grow"
                                    >
                                      <div className="">
                                        {item?.icon && (
                                          <span className="card-icon">
                                            <img src={item?.icon} alt="icon" />
                                          </span>
                                        )}
                                        <div className="card-meta">
                                          <p className="text-capitalize name">
                                            {item?.name}
                                          </p>
                                          {item?.level && (
                                            <small className="capitalize opacity-60 inline-block font-medium mt-2">
                                              {item?.level}
                                            </small>
                                          )}

                                          {item?.tools && (
                                            <ul className="flex flex-wrap gap-[8px] mt-3">
                                              {item?.tools?.map(
                                                ({ name, level }, toolIdx) => (
                                                  <li
                                                    className="tag"
                                                    title={name}
                                                    key={toolIdx}
                                                  >
                                                    {name}
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          )}
                                        </div>
                                      </div>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          )
                          // return (
                          //   <ul className="flex flex-col flex-wrap gap-[30px]">
                          //     {value?.map(
                          //       (item: TechnicalSkillInterface, idx) => (
                          //         <li key={idx} className="card skill">
                          //           {item?.icon && (
                          //             <span className="card-icon">
                          //               <img src={item?.icon} alt="icon" />
                          //             </span>
                          //           )}
                          //           <div className="card-meta">
                          //             <p className="text-capitalize name">
                          //               {item?.name}
                          //             </p>
                          //             {item?.level && (
                          //               <small className="capitalize text-gray-400 inline-block mt-2">
                          //                 {item?.level}
                          //               </small>
                          //             )}
                          //
                          //             {item?.tools && (
                          //               <ul className="flex flex-wrap gap-[8px] mt-3">
                          //                 {item?.tools?.map(
                          //                   ({ name, level }, toolIdx) => (
                          //                     <li
                          //                       className="tag"
                          //                       title={name}
                          //                       key={toolIdx}
                          //                     >
                          //                       {name}
                          //                     </li>
                          //                   )
                          //                 )}
                          //               </ul>
                          //             )}
                          //           </div>
                          //         </li>
                          //       )
                          //     )}
                          //   </ul>
                          // )
                        }
                        case 'soft-skills':
                        case 'interest': {
                          return (
                            <ul className="flex gap-[8px] flex-wrap">
                              {value?.map((item, key) => (
                                <li key={key} className="tag" title={item}>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )
                        }
                        default:
                          return null
                      }
                    })()}
                  </li>
                ) : null}
              </ul>
            )
          )}
        </FlexBox>
      </BoxedStyled>
      <BottomNavStyled>
        <BottomNavigation
          leftSlot={{ content: 'Work Experience', to: PAGES.WORK_EXP }}
          rightSlot={{
            content: 'Certifications',
            to: PAGES.CERT,
          }}
        />
      </BottomNavStyled>
    </ContainerStyled>
  )
}
