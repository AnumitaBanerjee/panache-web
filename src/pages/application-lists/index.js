import React from "react";
import Link from "next/link";
import ApplicationListsPage from "../../../components/application-lists/index";


const ApplicationLists = (props) => {
    return (
        <>
         <ApplicationListsPage/>
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

export default ApplicationLists;