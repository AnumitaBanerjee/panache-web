import React from 'react';

const AccountHeader = () => {
  return (
    <>
        <AccountHeaderPage />
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

export default AccountHeader;