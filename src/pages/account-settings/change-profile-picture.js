import React from 'react';
import ChangeProfilePicturePage from '../../../components/account-settings/change-profile-picture'; 

const ChangeProfilePicture = () => {
  return (
    <>
        <ChangeProfilePicturePage />
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

export default ChangeProfilePicture;