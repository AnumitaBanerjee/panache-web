import React from 'react'
import Sidebar from './sidebar';
import Header from './dashboard/Header';

const DashboardLayout = (props) => {
  return (
    <div className="content-wrapper">
      <div className="dahhboard-panel">
          <Sidebar/>
          <Header />
          {props.children}
      </div>
    </div>
  )
}

export default DashboardLayout;