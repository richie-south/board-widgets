import React from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {selectDataPointLatestFollowers} from '../../../lib/features/data-point/data-pont-slice'
import {Widget} from '../../../lib/features/widgets/widgets-slice'
import {WidgetToolbar} from '../../widget-toolbar/widget-toolbar'
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
  const {t} = useTranslation()

  return (
    <LatestFollowersWidgetContainer positions={item.positions} draggable>
      <WidgetToolbar widget={item} />
      <LatestFollowersWidgetTitle>
        {t('latestFollowersWidget.title')}
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
  )
}
