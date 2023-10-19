import React from 'react';
import CheckOutPage from '../../../components/checkout'

const CheckOut = () => {
  return (
    <>
        <CheckOutPage />
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

export default CheckOut;