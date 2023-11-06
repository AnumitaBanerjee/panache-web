import React from 'react';
import ChooseMethodsPage from '../../../components/checkout/choose-methods'

const ChooseMethods = () => {
  return (
    <>
        <ChooseMethodsPage />
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

export default ChooseMethods;