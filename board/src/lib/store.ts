import {configureStore} from '@reduxjs/toolkit'
import {appThemeSlice} from './features/app-theme/app-theme-slice'
import {widgetsSlice} from './features/widgets/widgets-slice'
import {configModeSlice} from './features/config-mode/config-mode-slice'
import {dataPointSlice} from './features/data-point/data-pont-slice'
import {boardSizeSlice} from './features/board-size/board-size'
// ...

export const store = configureStore({
  reducer: {
    widgets: widgetsSlice.reducer,
    dataPoint: dataPointSlice.reducer,
    theme: appThemeSlice.reducer,
    configMode: configModeSlice.reducer,
    boardSize: boardSizeSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
