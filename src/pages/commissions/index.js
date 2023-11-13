import React from 'react';
import CommissionsPage from '../../../components/commissions';

const Commissions = () => {
    return (
        <>
            <CommissionsPage />
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

export default Commissions;