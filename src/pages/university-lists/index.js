import React from 'react';
import UniversityListsPage from '../../../components/university-lists'; 

const UniversityLists = () => {
  return (
    <>
        <UniversityListsPage />
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

export default UniversityLists;