import React, {useLayoutEffect} from 'react'
import {useRef} from 'react'
import {useAppDispatch, useAppSelector} from '../../lib/hooks'
import {WidgetBase} from '../data-point-widgets/widget-base-styles'
import {WidgetSelector} from '../data-point-widgets/widget-selector'
import {BoardContainer} from './board-styles'
import debounce from 'lodash/debounce'
import {updateBoardHeightWidth} from '../../lib/thunk/rebuild-grid'

type Props = {}
export const Board: React.FC<Props> = () => {
  const boardRef = useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch()
  const widgets = useAppSelector((state) =>
    state.widgets.filter((widget) => !widget.hidden),
  )
  const congifMode = useAppSelector((state) => state.configMode)

  const debouncedUpdateSize = useRef(
    debounce(() => {
      dispatch(
        updateBoardHeightWidth({
          width: boardRef.current?.clientWidth ?? 0,
          height: boardRef.current?.clientHeight ?? 0,
        }),
      )
    }, 200),
  )

  useLayoutEffect(() => {
    function updateSize() {
      debouncedUpdateSize.current()
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return (
    <BoardContainer ref={boardRef}>
      {widgets.map((item) => (
        <WidgetBase
          key={item.id}
          positions={item.positions}
          draggable={congifMode}
        >
          <WidgetSelector key={item.id} item={item}>
            {item.id}
          </WidgetSelector>
        </WidgetBase>
      ))}
    </BoardContainer>
  )
}
