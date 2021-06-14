import styled, {css} from 'styled-components'
import {
  Widget,
  WidgetSizeType,
} from '../../../lib/features/widgets/widgets-slice'
import {widgetBaseStyle} from '../widget-base-styles'

export const LatestCommentsWidgetContainer = styled.div<{
  positions: Widget['positions']
  size?: WidgetSizeType
}>`
  ${widgetBaseStyle}
  background-color: ${(props) => props.theme.widgets.latestComments.plate};

  ${(props) =>
    props.size === '2:2' &&
    css`
      display: grid;
      grid-template-areas:
        'header'
        'content';
      grid-template-rows: 44px 1fr;
      height: 100%;
    `}
`

export const LatestCommentsWidgetTwoToTwoContainer = styled.div<{
  positions: Widget['positions']
}>`
  ${widgetBaseStyle}
  background-color: ${(props) => props.theme.widgets.latestComments.plate};

  display: grid;
  grid-template-areas:
    'header'
    'content';
  grid-template-rows: 44px 1fr;
  height: 100%;
`

export const LatestCommentsWidgetHeader = styled.div`
  grid-area: header;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: ${(props) => props.theme.widgets.latestComments.title};
`

export const LatestCommentsWidgetCommentsList = styled.div`
  grid-area: content;
  display: grid;
  grid-template-rows: repeat(auto-fill, 60px);
  grid-gap: 8px;
  overflow: hidden;
  height: 100%;
`

export const LatestCommentsWidgetCommentsListItem = styled.div`
  display: grid;
  grid-template-columns: 32px 1fr;
  grid-gap: 16px;
  align-items: center;
  box-sizing: border-box;
`

export const LatestCommentsWidgetListItemPicture = styled.img`
  border-radius: 50%;
  width: 32px;
`

export const LatestCommentsWidgetListItemContent = styled.div``

export const LatestCommentsWidgetListItemName = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${(props) => props.theme.widgets.latestComments.name};
`

export const LatestCommentsWidgetListItemComment = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.widgets.latestComments.commment};
`
