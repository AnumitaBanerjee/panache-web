import React from 'react';
import MultiSurveyPage from '../../../components/multi-survey';

const MultiSurvey = () => {
  return (
    <>
        <MultiSurveyPage />
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

export default MultiSurvey;