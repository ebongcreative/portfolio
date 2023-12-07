import styled from 'styled-components'

export const GalleryStyled = styled.div`
  min-width: 300px;
  flex: 1 0 auto;
  min-height: 200px;
  margin-top: 45px
`
export const FigureStyled = styled.figure`
  flex: 1 0 auto;
  max-height: 400px;
  max-width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: center;
  border-radius: 8px;

  img {
    object-fit: cover;
    width: 100%;
    object-position: center;
    height: 100%;
  }
`

