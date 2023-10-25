import React from 'react';
import AccountBodyPage from '../../../components/account-settings/account-body'

const AccountBody = () => {
  return (
    <>
        <AccountBodyPage />
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

export default AccountBody;