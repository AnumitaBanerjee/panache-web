import React from 'react';
import ChatDetailsPage from '../../../components/chat/detail'; 

const ChatDetails = () => {
  return (
    <>
        <ChatDetailsPage />
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

export default ChatDetails;