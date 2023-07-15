import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './components/Header'

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header/>
      <Outlet />
    </React.Fragment>
  )
}

export default AppLayout;