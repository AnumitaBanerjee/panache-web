import React from 'react';
import TrackCommissionsPage from '../../../components/track-commissions';

const TrackCommissions = () => {
    return (
        <>
            <TrackCommissionsPage />
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

export default TrackCommissions;