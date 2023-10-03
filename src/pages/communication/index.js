import React from "react";
import Link from "next/link";
import CommunicationPage from "../../../components/communication/index";


const Communication = (props) => {
    return (
        <>
         <CommunicationPage/>
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

export default Communication;