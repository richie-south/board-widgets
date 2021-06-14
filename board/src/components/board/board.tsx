import React from 'react'
import {useAppSelector} from '../../lib/hooks'
import {WidgetSelector} from '../widgets/widget-selector'
import {BoardContainer} from './board-styles'

type Props = {}
export const Board: React.FC<Props> = ({}) => {
  const widgets = useAppSelector((state) => state.widgets)

  return (
    <BoardContainer>
      {widgets.map((item) => (
        <WidgetSelector key={item.id} item={item}>
          {item.id}
        </WidgetSelector>
      ))}
    </BoardContainer>
  )
}
