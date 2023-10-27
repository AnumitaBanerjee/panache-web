import React from 'react';
import PrivacyPolicyPage from '../../../components/account-settings/privacy-policy'; 

const PrivacyPolicy = () => {
  return (
    <>
        <PrivacyPolicyPage />
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

export default PrivacyPolicy;