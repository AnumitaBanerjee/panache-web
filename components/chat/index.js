import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Chat = () => {
  return (
    <>
      <div className="content-panel">
        <div className="apply-list-pane-top">
          <h2>Chat lists</h2>
        </div>

        <div className="chat-area">
          <Tabs>
            <TabList>
              <Tab>All</Tab>
              <Tab>Unread</Tab>
              <Tab>Read</Tab>
            </TabList>

            <TabPanel>
              <div className="tab_details_text">
                <h4>Enquiry Now</h4>

              </div>
            </TabPanel>
            <TabPanel>
              <div className="tab_details_text">
                <h4>Franchisee Enquiries</h4>

              </div>
            </TabPanel>
            <TabPanel>
              <div className="tab_details_text">
                <h4>Corporate Orders</h4>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default Chat;