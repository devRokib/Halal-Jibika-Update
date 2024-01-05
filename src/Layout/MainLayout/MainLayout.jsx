import React from 'react'
import Header from '../Header/Header'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from '../Footer/Footer'

function MainLayout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      {/* <ScrollRestoration/> */}
      <Footer/>
    </div>
  )
}

export default MainLayout
