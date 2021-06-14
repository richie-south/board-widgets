import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {App} from './App'
import reportWebVitals from './reportWebVitals'
import {store} from './lib/store'
import {Provider} from 'react-redux'

import {TopLevelErrorBoundary} from './components/top-level-error-boundary'
import {ThemeSwitcher} from './components/theme-controller'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeSwitcher>
        <TopLevelErrorBoundary>
          <App />
        </TopLevelErrorBoundary>
      </ThemeSwitcher>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
