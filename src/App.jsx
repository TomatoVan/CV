import React from 'react'

import s from './App.module.scss'
import Avatar from './components/1-Avatar/Avatar'
import Menu from './components/3-Menu/Menu'
import AllRoutes from './components/4-Routes/Routes'

function App() {
  return (
    <div className={s.wrapper}>
      <div className={s.leftSide}>
        <Avatar />
      </div>
      <div className={s.rightSide}>
        <Menu />
        <AllRoutes />
      </div>
    </div>
  )
}

export default App
