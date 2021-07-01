import {createSlice} from '@reduxjs/toolkit'

type ConfigModeState = boolean
const initialState: ConfigModeState = false

export const configModeSlice = createSlice({
  name: 'configMode',
  initialState,
  reducers: {
    toggleConfigMode: (state) => {
      return !state
    },
  },
})
