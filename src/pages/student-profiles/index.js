import React from "react";
import Link from "next/link";
import StudentProfilesPage from "../../../components/student-profiles/index";


const StudentProfiles = (props) => {
    return (
        <>
         <StudentProfilesPage/>
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

export default StudentProfiles;