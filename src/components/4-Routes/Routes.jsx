import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Menu from '../3-Menu/Menu'
import AboutMe from '../pages/p1-AboutMe/AboutMe'
import Portfolio from '../pages/p2-Portfolio/Portfolio'
import Contacts from '../pages/p3-Contacts/Contacts'

export const PATH = {
  HOMEPAGE: '/',
  ABOUT: '/about',
  PORTFOLIO: '/portfolio',
  CONTACTS: '/contacts',
}

const AllRoutes = () => {
  return (
    <Routes>
      <Route path={PATH.HOMEPAGE} element={<Menu />} />
      <Route path={PATH.ABOUT} element={<AboutMe />} />
      <Route path={PATH.PORTFOLIO} element={<Portfolio />} />
      <Route path={PATH.CONTACTS} element={<Contacts />} />
      {/*<Route path="/*" element={<Error404/>}/>*/}
    </Routes>
  )
}

export default AllRoutes
