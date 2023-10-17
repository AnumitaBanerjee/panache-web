import React from 'react';
import FinancialAiPage from '../../../components/financial-aid'; 

const FinancialAi = () => {
  return (
    <>
        <FinancialAiPage />
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

export default FinancialAi;