import React from 'react';
import LoginAgentPage from '../../../components/login-agent'

const LoginAgent = () => {
  return (
    <>
        <LoginAgentPage />
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

export default LoginAgent;