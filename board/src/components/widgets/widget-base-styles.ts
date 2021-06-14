import {css} from 'styled-components'
import {Widget} from '../../lib/features/widgets/widgets-slice'

export const widgetBaseStyle = css<{
  positions: Widget['positions']
}>`
  box-sizing: border-box;
  box-shadow: ${(props) => props.theme.widgetBase.boxShadow};
  padding: ${(props) => props.theme.widgetBase.padding}px;
  border-radius: ${(props) => props.theme.widgetBase.radius}px;
  background-color: ${(props) => props.theme.widgetBase.plate};
  color: ${(props) => props.theme.widgetBase.text};

  grid-column-start: ${(props) => props.positions.columnStart};
  grid-column-end: ${(props) => props.positions.columnEnd};
  grid-row-start: ${(props) => props.positions.rowStart};
  grid-row-end: ${(props) => props.positions.rowEnd};
`
