import React from 'react';
import TemplatePage from '../../../components/template'; 

const Template = () => {
  return (
    <>
        <TemplatePage />
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

export default Template;