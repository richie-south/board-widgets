import {css} from 'styled-components'
import {Widget} from '../../../lib/features/widgets/widgets-slice'
import {widgetBaseStyle} from '../widget-base-styles'

export const likesWidgetStyle = css<{
  positions: Widget['positions']
}>`
  ${widgetBaseStyle}
  background-color: ${(props) => props.theme.widgets.likes.plate};
`
