import React from 'react'
import {useSelector} from 'react-redux'
import {selectDataPointLikes} from '../../../lib/features/data-point/data-pont-slice'
import {Widget} from '../../../lib/features/widgets/widgets-slice'
import {SingleDataPointWidget} from '../../generic-widgets/single-data-point-widget/single-data-point-widget'
import {LikesWidgetContainer} from './like-widget-styles'

type Props = {
  item: Widget
}

export const LikeWidget: React.FC<Props> = ({item}) => {
  const likes = useSelector(selectDataPointLikes)

  return (
    <LikesWidgetContainer positions={item.positions}>
      <SingleDataPointWidget
        data={String(likes.data)}
        title='likes'
        subtitle='instagram'
        theme='likes'
      />
    </LikesWidgetContainer>
  )
}