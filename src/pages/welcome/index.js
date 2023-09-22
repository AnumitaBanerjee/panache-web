import React from "react";
import WelcomePage from "../../../components/welcome";

const Welcome = (props) => {
    return (
        <>
            <WelcomePage />
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

export default Welcome;