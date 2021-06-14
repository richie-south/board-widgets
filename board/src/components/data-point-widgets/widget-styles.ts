import styled, {
  FlattenInterpolation,
  ThemedStyledProps,
} from 'styled-components'
import {Widget} from '../../lib/features/widgets/widgets-slice'
import {DataPointStateKeys} from '../../lib/features/data-point/data-pont-slice'
import {likesWidgetStyle} from './like-widget/like-widget-styles'
import {latestFollowersWidgetStyle} from './latest-followers-widget/latest-followers-widget-styles'

const styleOnType: {
  [key in DataPointStateKeys]: FlattenInterpolation<
    ThemedStyledProps<
      {
        positions: Widget['positions']
      },
      any
    >
  >
} = {
  latestFollowers: latestFollowersWidgetStyle,
  likes: likesWidgetStyle,
}

export const WidgetContainer = styled.div<{
  type: DataPointStateKeys
  positions: Widget['positions']
}>`
  ${(props) => styleOnType[props.type]}
`
