import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {DataPointStateKeys} from '../data-point/data-pont-slice'

export type WidgetSizeType =
  | '1:1'
  | '1:2'
  | '1:4'
  | '1:6'
  | '2:2'
  | '2:6'
  | '4:4'
  | '4:6'
  | '6:6'

export type WidgetPositions = {
  x: number
  y: number
  width: number
  height: number
}

export type Widget = {
  sizeType: WidgetSizeType
  id: string
  contentType: DataPointStateKeys
  availableSizes: WidgetSizeType[]
  positions: WidgetPositions
  hidden: boolean
}

type WidgetsState = Widget[]
const initialState: WidgetsState = [
  {
    id: '0',
    sizeType: '1:1',
    contentType: 'latestComments',
    availableSizes: ['1:1', '2:2'],
    hidden: false,
    positions: {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    },
  },
  {
    id: '1',
    sizeType: '1:2',
    contentType: 'likes',
    availableSizes: ['1:1', '1:2', '1:4', '2:2'],
    hidden: false,
    positions: {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    },
  },

  {
    id: '3',
    sizeType: '2:2',
    contentType: 'likes',
    availableSizes: ['1:1', '1:2', '1:4', '2:2'],
    hidden: false,
    positions: {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    },
  },

  {
    id: '4',
    sizeType: '1:1',
    contentType: 'likes',
    availableSizes: ['1:1', '1:2', '1:4', '2:2'],
    hidden: false,
    positions: {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    },
  },
  {
    id: '6',
    sizeType: '1:4',
    contentType: 'likes',
    availableSizes: ['1:1', '1:2', '1:4', '2:2'],
    hidden: false,
    positions: {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    },
  },
  {
    id: '5',
    sizeType: '1:4',
    contentType: 'latestFollowers',
    hidden: false,
    availableSizes: [
      '1:1',
      '1:2',
      '1:4',
      '1:6',
      '2:2',
      '2:6',
      '4:4',
      '4:6',
      '6:6',
    ],
    positions: {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    },
  },
]

export const widgetsSlice = createSlice({
  name: 'widgets',
  initialState: initialState,
  reducers: {
    addWidget: (state, action: PayloadAction<Widget>) => {
      return [...state, action.payload]
    },
    removeWidgetById: (state, action: PayloadAction<string>) => {
      return state.filter((b) => b.id !== action.payload)
    },
    setWidgets: (state, action: PayloadAction<Widget[]>) => {
      return action.payload
    },
    changeWidgetSize: (
      state,
      action: PayloadAction<{size: WidgetSizeType; id: string}>,
    ) => {
      return state.map((widget) => {
        if (widget.id === action.payload.id) {
          return {
            ...widget,
            sizeType: action.payload.size,
          }
        }

        return widget
      })
    },
  },
})
