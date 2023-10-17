import React from 'react';
import RecommendedProgramsPage from '../../../components/recommended-programs'; 

const RecommendedPrograms = () => {
  return (
    <>
        <RecommendedProgramsPage />
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

export default RecommendedPrograms;