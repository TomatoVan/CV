import React from 'react'

import './index.scss'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'

import App from './App'
import reportWebVitals from './reportWebVitals'

render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
