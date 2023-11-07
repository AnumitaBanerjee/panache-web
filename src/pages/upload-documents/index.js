import React from 'react';
import UploadDocumentsPage from '../../../components/upload-documents';

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
        layout:'AuthLayout'
      }, 
    }
}

export default UploadDocuments;