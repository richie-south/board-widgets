import React from 'react'
import {useSelector} from 'react-redux'
import {selectDataPointLatestFollowers} from '../../../lib/features/data-point/data-pont-slice'
import {Widget} from '../../../lib/features/widgets/widgets-slice'
import {WidgetContainer} from '../widget-styles'
import {
  LatestFollowersWidgetContainer,
  LatestFollowersWidgetListItem,
  LatestFollowersWidgetListItemName,
  LatestFollowersWidgetListItemPicture,
  LatestFollowersWidgetTitle,
} from './latest-followers-widget-styles'

type Props = {
  item: Widget
}

export const LatestFollowersWidget: React.FC<Props> = ({item}) => {
  const followers = useSelector(selectDataPointLatestFollowers)

  return (
    <WidgetContainer positions={item.positions} type={item.contentType}>
      <LatestFollowersWidgetContainer>
        <LatestFollowersWidgetTitle>
          Latest followers
        </LatestFollowersWidgetTitle>
        {followers.followers.map((follower) => (
          <LatestFollowersWidgetListItem key={follower.id}>
            <LatestFollowersWidgetListItemPicture src={follower.picture} />
            <LatestFollowersWidgetListItemName>
              {follower.name}
            </LatestFollowersWidgetListItemName>
          </LatestFollowersWidgetListItem>
        ))}
      </LatestFollowersWidgetContainer>
    </WidgetContainer>
  )
}
