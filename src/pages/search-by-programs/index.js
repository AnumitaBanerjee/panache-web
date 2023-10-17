import React from 'react';
import SearchByProgramsPage from '../../../components/search-by-programs'; 

const SearchByPrograms = () => {
  return (
    <>
        <SearchByProgramsPage />
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

export default SearchByPrograms;