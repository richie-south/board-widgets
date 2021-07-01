import styled from 'styled-components'

export const BoardContainer = styled.div`
  box-sizing: border-box;
  height: 100vh;
  position: relative;
  background-color: ${(props) => props.theme.board.plate};
`
