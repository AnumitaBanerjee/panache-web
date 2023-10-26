import React from 'react';
import AccountSettingsPage from '../../../components/account-settings/account-settings'; 

const AccountSettings = () => {
  return (
    <>
        <AccountSettingsPage />
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

export default AccountSettings;