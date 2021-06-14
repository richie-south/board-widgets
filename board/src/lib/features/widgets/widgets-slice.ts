import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {DataPointStateKeys} from '../data-point/data-pont-slice'

type WidgetSizeType =
  | '1:1'
  | '1:2'
  | '1:4'
  | '1:6'
  | '2:2'
  | '2:6'
  | '4:4'
  | '4:6'
  | '6:6'
export type Widget = {
  sizeType: WidgetSizeType
  id: string
  contentType: DataPointStateKeys
  availableSizes: WidgetSizeType[]
  positions: {
    columnStart: number
    columnEnd: number
    rowStart: number
    rowEnd: number
  }
}

type WidgetsState = Widget[]
const initialState: WidgetsState = [
  {
    id: '0',
    sizeType: '1:1',
    contentType: 'likes',
    availableSizes: ['1:1', '1:2'],
    positions: {
      columnStart: 1,
      columnEnd: 1,
      rowStart: 1,
      rowEnd: 1,
    },
  },

  {
    id: '1',
    sizeType: '1:4',
    contentType: 'latestFollowers',
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
      columnStart: 2,
      columnEnd: 6,
      rowStart: 1,
      rowEnd: 1,
    },
  },
]

export const widgetsSlice = createSlice({
  name: 'widgets',
  initialState,
  reducers: {
    addWidget: (state, action: PayloadAction<Widget>) => {
      state.push(action.payload)
    },
    removeWidgetById: (state, action: PayloadAction<string>) => {
      state = state.filter((b) => b.id !== action.payload)
    },
  },
})
