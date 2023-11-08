import React from 'react';
import StudentDashboardPage from '../../../components/dashboard/StudentDashboard';
import AgentDashboardPage from '../../../components/dashboard/AgentDashboard';
import  CounsellorDashboardPage from '../../../components/dashboard/CounsellorDashboard';

const Dasboard = () => {
  return (
    <>
        <StudentDashboardPage />
        {/* <AgentDashboardPage /> */}
         {/* <CounsellorDashboardPage /> */}
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

export default Dasboard;