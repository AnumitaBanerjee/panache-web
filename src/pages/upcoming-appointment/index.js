import React from 'react';
import UpcomingAppointmentPage from '../../../components/upcoming-appointment';

const UpcomingAppointment = () => {
    return (
        <>
            <UpcomingAppointmentPage />
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

export default UpcomingAppointment;