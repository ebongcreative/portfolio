import { CSSProperties, HTMLProps, PropsWithChildren } from 'react'

export interface IProps
  extends Pick<
      CSSProperties,
      | 'flexDirection'
      | 'gap'
      | 'rowGap'
      | 'columnGap'
      | 'justifyContent'
      | 'justifyItems'
      | 'justifySelf'
      | 'alignContent'
      | 'alignItems'
      | 'alignSelf'
      | 'width'
      | 'height'
    >,
    PropsWithChildren {}
