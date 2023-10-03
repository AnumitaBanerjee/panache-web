import React from 'react';
import FinancialAidInformationPage from '../../../components/financial-aid-information'; 

const FinancialAidInformation = () => {
  return (
    <>
        <FinancialAidInformationPage />
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

export default FinancialAidInformation;