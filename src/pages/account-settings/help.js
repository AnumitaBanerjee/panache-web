import React from 'react';
import HelpPage from '../../../components/account-settings/help'; 

const Help = () => {
  return (
    <>
        <HelpPage />
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

export default Help;