import {createSlice} from '@reduxjs/toolkit'

type AppThemeState = 'default' | 'dark'
const initialState = 'default' as AppThemeState

export const appThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeDark: (state) => {
      state = 'dark'
    },
    setThemeDefault: (state) => {
      state = 'default'
    },
  },
})
