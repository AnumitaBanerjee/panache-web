import React from 'react';
import LoginPage from '../../../components/login'

const Login = () => {
  return (
    <>
        <LoginPage />
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

export default Login;