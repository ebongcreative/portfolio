import styled  from "styled-components";

export const ContainerStyled = styled.section<{bordered?: boolean}>(
  ({bordered}) => `
  flex-grow: 1;
  height: 100vh;
  position: relative;
  padding-bottom: 60px;
  justify-content: center;
  display: flex;
  flex-direction column;
  padding-top: 60px;
  overflow-y: auto;
  ${
    bordered ? `
    outline: 2px dashed red;
    outline-offset: -1px;
    ` : undefined
  }
`
)

export const BoxedStyled = styled.section`
  margin: 0 auto;
  height: 100%;
  padding: 0 30px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  max-width: 500px;
  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 1024px;
  }
  overflow-y: auto;
`

export const FloatingButtonStyled = styled.div`
  transition: var(--fade-in);
  box-shadow: var(--beam-shadow);
  background: var(--bg);
  font-size: 18px;
  border: 2px solid var(--bg-accent);
  &:hover {
    @media screen and (min-width: 768px) {
      transform: translate(-2px, -2px);
    }
  }
`

export const ListItemStyled = styled.li`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
  margin: 0;
  padding: 8px;
  & > a {
    &:hover {
      color: var(--primary-accent);
    }
  }
`

export const ListStyled = styled.ul`
  display: flex;
  column-gap: 20px;
  align-items: center;
 
  &.list-row {
    flex-direction: row;
    flex-wrap: wrap;
  }
  &.list-col {
    flex-direction: column;
    flex-wrap: wrap;
  }
`