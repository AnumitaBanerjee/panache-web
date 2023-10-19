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
                <div className='chat-lists'>

                  <Link href="/chat/detail" className="chat-list">
                    <div className='chat-profile'>
                      <figure>
                        <span class="notification-dot"></span>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/member-1.jpg`}
                          alt="Panache"
                          width={40}
                          height={40}
                          priority={true}
                        /></figure>
                      <div className='con'>
                        <p>John Doe</p>
                        <span>Nunc tincidunt eleifend urna</span>
                      </div>
                    </div>
                    <div className='chat-list-r'>
                      <span>16.56</span>
                    </div>
                  </Link>

                  <Link href="/chat/detail" className="chat-list">
                    <div className='chat-profile'>
                      <figure>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/member-2.jpg`}
                          alt="Panache"
                          width={40}
                          height={40}
                          priority={true}
                        /></figure>
                      <div className='con'>
                        <p>Amanda D.</p>
                        <span>Nunc tincidunt eleifend urna</span>
                      </div>
                    </div>
                    <div className='chat-list-r'>
                      <span>Thu</span>
                    </div>
                  </Link>

                  <Link href="/chat/detail" className="chat-list">
                    <div className='chat-profile'>
                      <figure>
                        <span class="notification-dot"></span>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/member-3.jpg`}
                          alt="Panache"
                          width={40}
                          height={40}
                          priority={true}
                        /></figure>
                      <div className='con'>
                        <p>Dylan Berry</p>
                        <span>Nunc tincidunt eleifend urna</span>
                      </div>
                    </div>
                    <div className='chat-list-r'>
                      <span>Wed</span>
                    </div>
                  </Link>

                  <Link href="/chat/detail" className="chat-list">
                    <div className='chat-profile'>
                      <figure>
                        <span class="notification-dot"></span>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/member-4.jpg`}
                          alt="Panache"
                          width={40}
                          height={40}
                          priority={true}
                        /></figure>
                      <div className='con'>
                        <p>David Baker</p>
                        <span>Nunc tincidunt eleifend urna</span>
                      </div>
                    </div>
                    <div className='chat-list-r'>
                      <span>Thu</span>
                    </div>
                  </Link>

                  <Link href="/chat/detail" className="chat-list">
                    <div className='chat-profile'>
                      <figure>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/member-1.jpg`}
                          alt="Panache"
                          width={40}
                          height={40}
                          priority={true}
                        /></figure>
                      <div className='con'>
                        <p>John Doe</p>
                        <span>Nunc tincidunt eleifend urna</span>
                      </div>
                    </div>
                    <div className='chat-list-r'>
                      <span>Fri</span>
                    </div>
                  </Link>

                  <Link href="/chat/detail" className="chat-list">
                    <div className='chat-profile'>
                      <figure>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/member-2.jpg`}
                          alt="Panache"
                          width={40}
                          height={40}
                          priority={true}
                        /></figure>
                      <div className='con'>
                        <p>Olivia Jason</p>
                        <span>Nunc tincidunt eleifend urna</span>
                      </div>
                    </div>
                    <div className='chat-list-r'>
                      <span>WED</span>
                    </div>
                  </Link>

                  <Link href="/chat/detail" className="chat-list">
                    <div className='chat-profile'>
                      <figure>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/member-3.jpg`}
                          alt="Panache"
                          width={40}
                          height={40}
                          priority={true}
                        /></figure>
                      <div className='con'>
                        <p>Andrew Doe</p>
                        <span>Nunc tincidunt eleifend urna</span>
                      </div>
                    </div>
                    <div className='chat-list-r'>
                      <span>Fri</span>
                    </div>
                  </Link>

                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tab_details_text">
                <div className='chat-lists'>
                  <Link href="/chat/detail" className="chat-list">
                    <div className='chat-profile'>
                      <figure>
                        <span class="notification-dot"></span>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/member-4.jpg`}
                          alt="Panache"
                          width={40}
                          height={40}
                          priority={true}
                        /></figure>
                      <div className='con'>
                        <p>John Doe</p>
                        <span>Nunc tincidunt eleifend urna</span>
                      </div>
                    </div>
                    <div className='chat-list-r'>
                      <span>16.56</span>
                    </div>
                  </Link>
                  <Link href="/chat/detail" className="chat-list">
                    <div className='chat-profile'>
                      <figure>
                        <span class="notification-dot"></span>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/member-2.jpg`}
                          alt="Panache"
                          width={40}
                          height={40}
                          priority={true}
                        /></figure>
                      <div className='con'>
                        <p>Amanda D.</p>
                        <span>Nunc tincidunt eleifend urna</span>
                      </div>
                    </div>
                    <div className='chat-list-r'>
                      <span>Thu</span>
                    </div>
                  </Link>
                  <Link href="/chat/detail" className="chat-list">
                    <div className='chat-profile'>
                      <figure>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/member-3.jpg`}
                          alt="Panache"
                          width={40}
                          height={40}
                          priority={true}
                        /></figure>
                      <div className='con'>
                        <p>Andrew Doe</p>
                        <span>Nunc tincidunt eleifend urna</span>
                      </div>
                    </div>
                    <div className='chat-list-r'>
                      <span>Fri</span>
                    </div>
                  </Link>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tab_details_text">
                <div className='chat-lists'>
                  <Link href="/chat/detail" className="chat-list">
                    <div className='chat-profile'>
                      <figure>
                        <span class="notification-dot"></span>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/member-2.jpg`}
                          alt="Panache"
                          width={40}
                          height={40}
                          priority={true}
                        /></figure>
                      <div className='con'>
                        <p>John Doe</p>
                        <span>Nunc tincidunt eleifend urna</span>
                      </div>
                    </div>
                    <div className='chat-list-r'>
                      <span>Fri</span>
                    </div>
                  </Link>
                  <Link href="/chat/detail" className="chat-list">
                    <div className='chat-profile'>
                      <figure>
                        <span class="notification-dot"></span>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/member-2.jpg`}
                          alt="Panache"
                          width={40}
                          height={40}
                          priority={true}
                        /></figure>
                      <div className='con'>
                        <p>Olivia Jason</p>
                        <span>Nunc tincidunt eleifend urna</span>
                      </div>
                    </div>
                    <div className='chat-list-r'>
                      <span>WED</span>
                    </div>
                  </Link>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default Chat;