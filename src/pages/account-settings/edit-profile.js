import React from 'react';
import EditProfilePage from '../../../components/account-settings/edit-profile'; 

const EditProfile = () => {
  return (
    <>
        <EditProfilePage />
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

export default EditProfile;