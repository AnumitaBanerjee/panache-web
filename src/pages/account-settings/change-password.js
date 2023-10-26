import React from 'react';
import ChangePasswordPage from '../../../components/account-settings/change-password'; 

const ChangePassword = () => {
  return (
    <>
        <ChangePasswordPage />
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

export default ChangePassword;