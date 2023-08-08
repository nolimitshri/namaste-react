import React from 'react'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'

import Header from './components/Header'
import appStore from './utils/appStore'

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <React.Fragment>
        <Header />
        <div className="pt-[10vh]">
          <Outlet />
        </div>
      </React.Fragment>
    </Provider>
  )
}

export default AppLayout;