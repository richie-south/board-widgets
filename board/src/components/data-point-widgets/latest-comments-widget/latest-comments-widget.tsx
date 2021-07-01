import React from 'react'
import {useSelector} from 'react-redux'
import {selectDataPointLatestComments} from '../../../lib/features/data-point/data-pont-slice'
import {Widget} from '../../../lib/features/widgets/widgets-slice'
import {SingleDataPointWidget} from '../../generic-widgets/single-data-point-widget/single-data-point-widget'
import {
  LatestCommentsWidgetCommentsList,
  LatestCommentsWidgetCommentsListItem,
  LatestCommentsWidgetContainer,
  LatestCommentsWidgetHeader,
  LatestCommentsWidgetListItemComment,
  LatestCommentsWidgetListItemContent,
  LatestCommentsWidgetListItemName,
  LatestCommentsWidgetListItemPicture,
} from './latest-comments-widget-styles'
import {useTranslation} from 'react-i18next'
import {WidgetToolbar} from '../../widget-toolbar/widget-toolbar'

type Props = {
  item: Widget
}

export const LatestCommentsWidget: React.FC<Props> = ({item}) => {
  const commentsData = useSelector(selectDataPointLatestComments)
  const {t} = useTranslation()

  if (item.sizeType === '1:1') {
    return (
      <LatestCommentsWidgetContainer positions={item.positions}>
        <WidgetToolbar widget={item} />
        <SingleDataPointWidget
          data={String(commentsData.total)}
          title={t('latestCommentsWidget.comments')}
          subtitle={t('latestCommentsWidget.instagram')}
          theme='latestComments'
        />
      </LatestCommentsWidgetContainer>
    )
  }

  if (item.sizeType === '2:2') {
    return (
      <LatestCommentsWidgetContainer
        positions={item.positions}
        size={item.sizeType}
      >
        <WidgetToolbar widget={item} />
        <LatestCommentsWidgetHeader>
          {commentsData.total} {t('latestCommentsWidget.comments')}
        </LatestCommentsWidgetHeader>

        <LatestCommentsWidgetCommentsList>
          {commentsData.comments.slice(0, 5).map((comment) => (
            <LatestCommentsWidgetCommentsListItem key={comment.id}>
              <LatestCommentsWidgetListItemPicture src={comment.picture} />

              <LatestCommentsWidgetListItemContent>
                <LatestCommentsWidgetListItemName>
                  {comment.name}
                </LatestCommentsWidgetListItemName>

                <LatestCommentsWidgetListItemComment>
                  {comment.comment}
                </LatestCommentsWidgetListItemComment>
              </LatestCommentsWidgetListItemContent>
            </LatestCommentsWidgetCommentsListItem>
          ))}
        </LatestCommentsWidgetCommentsList>
      </LatestCommentsWidgetContainer>
    )
  }

  return null
}
