import React from 'react';
import SearchByUniversityPage from '../../../components/search-by-university'; 

const SearchByUniversity = () => {
  return (
    <>
        <SearchByUniversityPage />
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

export default SearchByUniversity;