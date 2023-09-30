import React from 'react';
import PendingTasksPage from '../../../components/pending-tasks';

const PendingTasks = () => {
    return (
        <>
            <PendingTasksPage />
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

export default PendingTasks;