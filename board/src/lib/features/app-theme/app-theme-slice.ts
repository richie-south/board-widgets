import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AvailableThemes} from '../../../theme/theme'

const initialState = 'default' as AvailableThemes

export const appThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<AvailableThemes>) => {
      return action.payload
    },
  },
})
