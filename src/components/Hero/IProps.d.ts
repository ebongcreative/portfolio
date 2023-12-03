import { PropsWithChildren } from 'react'

export interface IProps extends PropsWithChildren {
  mainTitle: JSX.Element | string
  subTitle: JSX.Element | string
  contactLinks: Array<JSX.Element | string>
}
