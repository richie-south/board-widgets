import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type BoardSize = {
  height: number
  width: number
  rows: number
  columns: number
  padding: number
}
const initialState: BoardSize = {
  height: 0,
  width: 0,
  rows: 5,
  columns: 6,
  padding: 32,
}

export const boardSizeSlice = createSlice({
  name: 'boardSize',
  initialState: initialState,
  reducers: {
    setBoardHeightWidth: (
      state,
      action: PayloadAction<{
        height: number
        width: number
      }>,
    ) => {
      return {
        ...state,
        ...action.payload,
      }
    },

    setBoardRows: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        rows: action.payload,
      }
    },

    setBoardColumns: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        columns: action.payload,
      }
    },

    setBoardPadding: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        padding: action.payload,
      }
    },
  },
})
