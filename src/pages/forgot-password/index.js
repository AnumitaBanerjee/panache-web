import React from 'react';
import ForgotPasswordPage from '../../../components/forgot-password';

const ForgotPassword = () => {
  return (
    <>
        <ForgotPasswordPage />
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

export default ForgotPassword;