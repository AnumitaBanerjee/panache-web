import React from 'react';
import InvoicesPage from '../../../components/invoices';

const Invoices = () => {
    return (
        <>
            <InvoicesPage />
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

export default Invoices;