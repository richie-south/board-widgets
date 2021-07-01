import React from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {selectDataPointLikes} from '../../../lib/features/data-point/data-pont-slice'
import {Widget} from '../../../lib/features/widgets/widgets-slice'
import {SingleDataPointWidget} from '../../generic-widgets/single-data-point-widget/single-data-point-widget'
import {WidgetToolbar} from '../../widget-toolbar/widget-toolbar'
import {LikesWidgetContainer} from './like-widget-styles'

type Props = {
  item: Widget
}

export const LikeWidget: React.FC<Props> = ({item}) => {
  const likes = useSelector(selectDataPointLikes)
  const {t} = useTranslation()

  return (
    <LikesWidgetContainer positions={item.positions}>
      <WidgetToolbar widget={item} />
      <SingleDataPointWidget
        data={String(likes.data)}
        title={t('likeWidget.title')}
        subtitle={t('likeWidget.subtitle')}
        theme='likes'
      />
    </LikesWidgetContainer>
  )
}
