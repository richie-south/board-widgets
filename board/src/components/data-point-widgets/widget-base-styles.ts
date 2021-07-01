import styled, {css} from 'styled-components'
import {Widget} from '../../lib/features/widgets/widgets-slice'

export const widgetBaseStyle = css<{
  positions: Widget['positions']
}>`
  position: relative;
  box-sizing: border-box;
  user-select: none;
  box-shadow: ${(props) => props.theme.widgetBase.boxShadow};
  padding: ${(props) => props.theme.widgetBase.padding}px;
  border-radius: ${(props) => props.theme.widgetBase.radius}px;
  background-color: ${(props) => props.theme.widgetBase.plate};
  color: ${(props) => props.theme.widgetBase.text};
  height: 100%;
  width: 100%;
`

export const WidgetBase = styled.div<{
  positions: Widget['positions']
}>`
  position: absolute;
  top: ${(props) => props.positions.y}px;
  left: ${(props) => props.positions.x}px;
  height: ${(props) => props.positions.height}px;
  width: ${(props) => props.positions.width}px;
  transition: top 150ms, left 150ms, height 150ms, width 150ms;
`
