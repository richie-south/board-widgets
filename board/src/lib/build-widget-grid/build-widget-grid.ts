import {Widget, WidgetSizeType} from '../features/widgets/widgets-slice'

type Grid = Array<Array<string | null>>

type WidgetSizesMap = {
  [key in WidgetSizeType]: {
    height: number
    width: number
  }
}

function getWidgetInsertPosition(
  grid: Grid,
  currentGridRow: number,
  rowSize: number,
  columnSize: number,
): boolean | [number[], number[]] {
  let canFitColumn = []
  let canFitRow = []

  for (let row = 0; row < currentGridRow + rowSize; row++) {
    for (let column = 0; column < grid[row]?.length ?? 0; column++) {
      if (grid[row][column] === null) {
        if (canFitColumn.length !== columnSize) {
          canFitColumn.push(column)
        }

        if (canFitColumn.length >= columnSize) {
          canFitRow.push(row)

          if (
            canFitRow.length === rowSize &&
            canFitColumn.length === columnSize
          ) {
            return [canFitRow.sort(), canFitColumn.sort()]
          }

          break
        }
      } else {
        canFitColumn = []
        canFitRow = []
      }
    }

    if (canFitColumn.length !== columnSize) {
      canFitColumn = []
    }
  }

  return false
}

function addWidgetToGrid(
  _grid: Grid,
  insertAt: [number[], number[]],
  widgetId: string,
): [Grid, number, number] {
  const grid = JSON.parse(JSON.stringify(_grid))
  const rows = insertAt[0]
  const columns = insertAt[1]

  for (let row = 0; row < rows.length; row++) {
    const rowNumber = rows[row]

    for (let column = 0; column < columns.length; column++) {
      const columnNumber = columns[column]
      grid[rowNumber][columnNumber] = widgetId
    }
  }
  return [grid, columns[0], rows[0]]
}

function getMockWidget(
  widget: Widget,
  grid: Grid,
): {
  widget: Widget
  grid: Grid
} {
  return {
    grid,
    widget: {
      ...widget,
      hidden: true,
    },
  }
}

function getWidgetWithPosition(
  widget: Widget,
  columnWidth: number,
  rowHeight: number,
  widgetSizes: WidgetSizesMap,
  grid: Grid,
  gridRows: number,
  gridPadding: number,
): {
  widget: Widget
  grid: Grid
} {
  const size = widgetSizes[widget.sizeType]
  let addedToGridRow = 0

  const [rowSize, columnSize] = widget.sizeType.split(':').map((v) => +v)

  let insertAt: [number[], number[]] | boolean | undefined
  do {
    if (insertAt !== undefined) {
      addedToGridRow++
    }

    insertAt = getWidgetInsertPosition(
      grid,
      addedToGridRow,
      rowSize,
      columnSize,
    )
  } while (!insertAt && addedToGridRow <= gridRows)

  if (addedToGridRow > gridRows) {
    return getMockWidget(widget, grid)
  }

  const [updatedGrid, columnStartPosition, rowStartPosition] = addWidgetToGrid(
    grid,
    insertAt as [number[], number[]],
    widget.id,
  )

  const updatedWidget = {
    ...widget,
    positions: {
      ...widget.positions,
      width: size.width - gridPadding,
      height: size.height - gridPadding,
      x: columnStartPosition * columnWidth + gridPadding,
      y: rowStartPosition * rowHeight + gridPadding,
    },
  }
  return {
    widget: updatedWidget,
    grid: updatedGrid,
  }
}

function getWidgetSizes(
  rowHeight: number,
  columnWidth: number,
): WidgetSizesMap {
  const widgetSizeMap: WidgetSizesMap = {
    '1:1': {
      height: rowHeight,
      width: columnWidth,
    },
    '1:2': {
      height: rowHeight,
      width: columnWidth * 2,
    },
    '1:4': {
      height: rowHeight,
      width: columnWidth * 4,
    },
    '1:6': {
      height: rowHeight,
      width: columnWidth * 6,
    },
    '2:2': {
      height: rowHeight * 2,
      width: columnWidth * 2,
    },
    '2:6': {
      height: rowHeight * 2,
      width: columnWidth * 6,
    },
    '4:4': {
      height: rowHeight * 4,
      width: columnWidth * 4,
    },
    '4:6': {
      height: rowHeight * 4,
      width: columnWidth * 6,
    },
    '6:6': {
      height: rowHeight * 6,
      width: columnWidth * 6,
    },
  }

  return widgetSizeMap
}

export function buildWidgetGrid(
  widgets: Widget[],
  containerWidth: number,
  constainerHeight: number,
  gridColumns: number,
  gridRows: number,
  gridPadding: number,
): Widget[] {
  const columnWidth = (containerWidth - gridPadding * 2) / gridColumns
  const rowHeight = (constainerHeight - gridPadding * 2) / gridRows
  const widgetSizes = getWidgetSizes(rowHeight, columnWidth)

  const columns = new Array<string | null>(gridColumns).fill(
    null,
    0,
    gridColumns,
  )
  const rows = new Array<Grid>(gridRows).fill([], 0, gridRows)
  let grid = rows.map((a) => columns)

  const builtWidgets = widgets.reduce((_widgets, widget) => {
    const {widget: updatedWidget, grid: updatedGrid} = getWidgetWithPosition(
      widget,
      columnWidth,
      rowHeight,
      widgetSizes,
      grid,
      gridRows,
      gridPadding,
    )

    grid = updatedGrid
    _widgets.push(updatedWidget)

    return _widgets
  }, [] as Widget[])

  return builtWidgets
}
