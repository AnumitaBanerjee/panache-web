import React from 'react';
import SubscriptionsPage from '../../../components/account-settings/subscriptions'; 

const Subscriptions = () => {
  return (
    <>
        <SubscriptionsPage />
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

export default Subscriptions;