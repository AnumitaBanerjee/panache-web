import React from 'react'
import Sidebar from './sidebar';

const DashboardLayout = (props) => {
  return (
    <div className="dahhboard-panel">
        <Sidebar/>
        {props.children}
    </div>
  )
}

export default DashboardLayout;