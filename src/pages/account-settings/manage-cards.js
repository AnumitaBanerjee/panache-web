import React from 'react';
import ManageCardsPage from '../../../components/account-settings/manage-cards'; 

const ManageCards = () => {
  return (
    <>
        <ManageCardsPage />
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

export default ManageCards;