import { IProps } from './IProps'
import { ContainerStyled } from './styled'

export default function FlexBox({children, ...style}: IProps): JSX.Element {
  return <ContainerStyled style={style}>{children}</ContainerStyled>
}
