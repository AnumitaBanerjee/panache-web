import React from 'react';
import OtherFinancialAssistancePage from '../../../components/other-financial-assistance'; 

const OtherFinancialAssistance = () => {
  return (
    <>
        <OtherFinancialAssistancePage />
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

export default OtherFinancialAssistance;