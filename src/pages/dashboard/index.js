import React from 'react';
import DashboardPage from '../../../components/dashboard';

const Dasboard = () => {
  return (
    <>
        <DashboardPage />
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

export default Dasboard;