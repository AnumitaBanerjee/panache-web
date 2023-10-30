import React from 'react';
import UniversityPage from '../../../components/university'; 

const University = () => {
  return (
    <>
        <UniversityPage />
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

export default University;