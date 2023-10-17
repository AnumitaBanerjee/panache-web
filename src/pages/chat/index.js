import React from 'react';
import ChatPage from '../../../components/chat'; 

const Chat = () => {
  return (
    <>
        <ChatPage />
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

export default Chat;