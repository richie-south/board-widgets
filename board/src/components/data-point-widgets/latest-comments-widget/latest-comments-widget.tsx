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

type Props = {
  item: Widget
}

export const LatestCommentsWidget: React.FC<Props> = ({item}) => {
  const commentsData = useSelector(selectDataPointLatestComments)

  if (item.sizeType === '1:1') {
    return (
      <LatestCommentsWidgetContainer positions={item.positions}>
        <SingleDataPointWidget
          data={String(commentsData.total)}
          title='comments'
          subtitle='instagram'
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
        <LatestCommentsWidgetHeader>
          {commentsData.total} comments
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
