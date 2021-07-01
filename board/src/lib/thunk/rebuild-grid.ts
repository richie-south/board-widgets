import {buildWidgetGrid} from '../build-widget-grid/build-widget-grid'
import {boardSizeSlice} from '../features/board-size/board-size'
import {widgetsSlice} from '../features/widgets/widgets-slice'
import {AppDispatch, RootState} from '../store'

export const updateBoardHeightWidth =
  ({width, height}: {width: number; height: number}) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    const widgets = state.widgets
    const boardSize = state.boardSize

    const builtWidgets = buildWidgetGrid(
      widgets,
      width,
      height,
      boardSize.columns,
      boardSize.rows,
      boardSize.padding,
    )
    dispatch(
      boardSizeSlice.actions.setBoardHeightWidth({
        width,
        height,
      }),
    )
    dispatch(widgetsSlice.actions.setWidgets(builtWidgets))
  }

export const updateBoard =
  () => async (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    const widgets = state.widgets
    const boardSize = state.boardSize

    const builtWidgets = buildWidgetGrid(
      widgets,
      boardSize.width,
      boardSize.height,
      boardSize.columns,
      boardSize.rows,
      boardSize.padding,
    )

    dispatch(widgetsSlice.actions.setWidgets(builtWidgets))
  }
