import React from 'react';
import MultiStepFormPage from '../../../components/multistep-form/MultiStepForm';

const index = () => {
    return (
        <>
            <MultiStepFormPage />
        </>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {
            layout: 'DashboardLayout'
        },
    }
}

export default index;