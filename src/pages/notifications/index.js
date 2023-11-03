import React from 'react';
import NotificationsPage from '../../../components/notifications/'; 

const Notifications = () => {
  return (
    <>
        <NotificationsPage />
    </>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      layout:'DashboardLayout'
    }, 
  }
}

export default Notifications;