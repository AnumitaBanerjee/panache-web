import React from 'react';
import AvailableScholarshipsPage from '../../../components/available-scholarships'; 

const AvailableScholarships = () => {
  return (
    <>
        <AvailableScholarshipsPage />
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

export default AvailableScholarships;