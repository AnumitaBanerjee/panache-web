import React from 'react';
import ChangeEmailAddressPage from '../../../components/account-settings/change-email-address'; 

const ChangeEmailAddress = () => {
  return (
    <>
        <ChangeEmailAddressPage />
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

export default ChangeEmailAddress;