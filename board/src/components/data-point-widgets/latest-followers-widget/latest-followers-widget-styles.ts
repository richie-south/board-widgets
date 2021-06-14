import styled, {css} from 'styled-components'
import {Widget} from '../../../lib/features/widgets/widgets-slice'
import {widgetBaseStyle} from '../widget-base-styles'

export const latestFollowersWidgetStyle = css<{
  positions: Widget['positions']
}>`
  ${widgetBaseStyle}
  background-color: ${(props) => props.theme.widgets.latestFollowers.plate};
`

export const LatestFollowersWidgetContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 137px);
  grid-gap: 8px;
  overflow: hidden;
  height: 100%;
`

export const LatestFollowersWidgetTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 25px;
  color: ${(props) => props.theme.widgets.latestFollowers.title};
`

export const LatestFollowersWidgetListItem = styled.div`
  display: grid;
  grid-template-columns: 24px 1fr;
  grid-gap: 16px;
  align-items: center;
  box-sizing: border-box;
  padding: 8px;
  background: ${(props) => props.theme.widgets.latestFollowers.itemPlate};

  border-radius: 8px;
`

export const LatestFollowersWidgetListItemPicture = styled.img`
  border-radius: 50%;
  width: 24px;
`

export const LatestFollowersWidgetListItemName = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.widgets.latestFollowers.name};
`
