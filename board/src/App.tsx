import React, {Suspense} from 'react'
import './App.css'
import {Board} from './components/board/board'
import {TopBar} from './components/top-bar/top-bar'

export const App: React.FC = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <TopBar />
      <Board />
    </Suspense>
  )
}
