import React from 'react';
import CongratulationsPage from '../../../components/checkout/congratulations'

const Congratulations = () => {
  return (
    <>
        <CongratulationsPage />
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

export default Congratulations;