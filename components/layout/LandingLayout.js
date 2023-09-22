import React from 'react'
import Header from "./Header";
import Footer from "./Footer";

const LandingLayout = (props) => {
    return(
        <>
         <Header />   
            {props.children}
         <Footer/>
        </>
    )
}

export default LandingLayout