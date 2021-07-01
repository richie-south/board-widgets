import styled, {css} from 'styled-components'

export const TopBarContainer = styled.div<{
  expanded: boolean
}>`
  height: 64px;
  display: grid;
  align-items: center;
  padding-left: 32px;
  padding-right: 32px;
  background: white;
  z-index: 100;
  position: fixed;
  top: 0px;

  box-shadow: 0px 10px 28px rgb(168 168 168 / 25%),
    0px 10px 10px rgb(169 169 169 / 22%);

  ${(props) =>
    props.expanded
      ? css`
          width: 100%;
          grid-template-areas: 'left center right';
          grid-template-columns: 1fr 1fr 1fr;
        `
      : css`
          grid-template-areas: 'left';
          border-top-right-radius: 12px;
          border-bottom-right-radius: 12px;
        `}
`

export const TopBarContainerLeft = styled.div`
  grid-area: left;
  display: grid;
  justify-content: flex-start;
`

export const TopBarContainerCenter = styled.div`
  grid-area: center;
  display: grid;
  justify-content: center;
`

export const TopBarContainerRight = styled.div`
  grid-area: right;
  display: grid;
  justify-content: flex-end;
`

export const TopBarContainerSpacer = styled.div`
  height: 80px;
  background-color: ${(props) => props.theme.board.plate};
`
