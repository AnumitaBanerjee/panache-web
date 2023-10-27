import React from 'react';
import TermsOfUsePage from '../../../components/account-settings/terms-of-use'; 

const TermsOfUse = () => {
  return (
    <>
        <TermsOfUsePage />
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

export default TermsOfUse;