import React from 'react'
import {Widget as WidgetType} from '../../lib/features/widgets/widgets-slice'
import {LatestFollowersWidget} from './latest-followers-widget/latest-followers-widget'
import {LikeWidget} from './like-widget/like-widget'

type Props = {
  item: WidgetType
}

export const WidgetSelector: React.FC<Props> = ({item}) => {
  switch (item.contentType) {
    case 'likes':
      return <LikeWidget key={item.id} item={item} />
    case 'latestFollowers':
      return <LatestFollowersWidget key={item.id} item={item} />
    default:
      return null
  }
}
