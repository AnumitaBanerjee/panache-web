import React from 'react';
import UploadDocumentsPage from '../../../components/account-settings/upload-documents'; 

const UploadDocuments = () => {
  return (
    <>
        <UploadDocumentsPage />
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

export default UploadDocuments;