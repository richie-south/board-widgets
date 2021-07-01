import styled from 'styled-components'

export const WidgetToolbarContainer = styled.div`
  position: absolute;
  background: #e4e4e4;
  height: 40px;
  left: 10px;
  width: calc(100% - 20px);
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  top: -40px;
  display: flex;
  align-items: center;
  padding-left: 6px;
  padding-right: 6px;
  box-sizing: border-box;
  z-index: 100;
`

export const WidgetToolbarSizeSelectorContainer = styled.div`
  width: 60px;
`
