import styled from 'styled-components'

export const BoardContainer = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(6, minmax(200px, 1fr));
  grid-template-rows: repeat(6, minmax(190px, 1fr));
  height: 100vh;
  grid-gap: 32px;
  padding: 32px;
  background-color: ${(props) => props.theme.board.plate};
`
