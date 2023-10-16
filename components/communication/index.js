import React, { useState } from 'react'
import Slider from "react-slick";
import Image from 'next/image';
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Communication = (props) => {

    return (
        <>
            <div className="content-panel">
                <div className="apply-list-pane-top">
                    <h2>Communication</h2>
                </div>
                <div className="apply-card-sec">

                    <div className="apply-card-inner">
                        <div className="apply-card-details">
                            <div className="apply-card-proifle">
                                <div className="apply-card-proifle-in">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/user-1.jpg`}
                                        alt="Panache"
                                        width={41}
                                        height={41}
                                        priority={true}
                                    />
                                </div>
                                <div className="apply-card-profile-details">
                                    <div className="apply-card-profile-details-t">
                                        <h3>Olivia Jason</h3>
                                        <span className="apply-id">Application ID: 25698745</span>
                                        <span className="student-id">Student ID: 25698745</span>
                                        <span className="application-book">
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/book-icon.png`}
                                                alt="Panache"
                                                width={11}
                                                height={13}
                                                priority={true}
                                            />
                                        </span>
                                    </div>
                                    <div className="applt-card-profile-details-b">
                                        <ul>
                                            <li className="tel">
                                                <Image
                                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/mobile-icon.png`}
                                                    alt="Panache"
                                                    width={12}
                                                    height={18}
                                                    priority={true}
                                                /> 0987654321</li>
                                            <li className="mail">
                                                <Image
                                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/mail-icon.png`}
                                                    alt="Panache"
                                                    width={20}
                                                    height={13}
                                                    priority={true}
                                                />
                                                Samplemail@lorem.com</li>
                                        </ul>
                                    </div>
                                    <div className="apply-card-inner-btm-head communication">
                                        <p className="aarea">
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/university-list-icon.png`}
                                                alt="Panache"
                                                width={16}
                                                height={16}
                                                priority={true}
                                            />
                                            Acadia University, Canada</p>
                                        <p className="tadke">Intake: <span>Jan 2023</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="apply-card-btns">
                                <div className="apply-card-btn-inner">
                                    <Link href="/" className="btn-orange btn">Remarks</Link>
                                    <Link href="/communication" className="btn-blue btn">Communication</Link>
                                </div>
                            </div>
                        </div>
                        <div className='details-tab'>
                            <Tabs>
                                <TabList>
                                    <Tab>Conversation</Tab>
                                    <Tab>Assigned Staff</Tab>
                                    <Tab>Uploaded Docs</Tab>
                                    <Tab>Transaction</Tab>
                                    <Tab>Reminders</Tab>
                                </TabList>
                                <TabPanel>
                                    <div className='tab_details_value'>

                                        <div className='tab_comment'>
                                            <div className='chat-main'>
                                                <div className='chat-main-profile'>
                                                    <Image
                                                        src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/member-1.jpg`}
                                                        alt="Panache"
                                                        width={36}
                                                        height={36}
                                                        priority={true}
                                                    />
                                                </div>
                                                <div className='chat-main-content'>
                                                    <div className='comment-main'>
                                                        <div className='comment'>Nunc tincidunt eleifend urna                                                       </div>
                                                        <span className='time'>12:36</span>
                                                    </div>
                                                    <div className='comment-reply-main'>
                                                        <div className='comment-reply'>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a dolor ultricies, consequat eros id, rhoncus turpis. Nunc at ligula non sapien semper semper. Donec sit amet turpis sit amet justo hendrerit volutpat. Nunc dictum libero finibus nunc auctor vehicula. Nam pretium tellus massa, at faucibus augue finibus ac.
                                                        </div>
                                                        <span className='time'>15.21</span>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className='chat-main'>
                                                <div className='chat-main-profile'>
                                                    <Image
                                                        src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/member-1.jpg`}
                                                        alt="Panache"
                                                        width={36}
                                                        height={36}
                                                        priority={true}
                                                    />
                                                </div>
                                                <div className='chat-main-content'>
                                                    <div className='comment-main'>
                                                        <div className='comment'>
                                                            Sed a neque in felis commodo porta. Sed varius bibendum nisl vel ullamcorper. Pellentesque mollis, nisl sed blandit rhoncus, massa nulla aliquet enim, ut varius tortor orci ac diam. Donec semper ante eu
                                                        </div>
                                                        <span className='time'>12:36</span>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className='chat-main'>
                                                <div className='chat-main-profile'>
                                                    <Image
                                                        src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/member-1.jpg`}
                                                        alt="Panache"
                                                        width={36}
                                                        height={36}
                                                        priority={true}
                                                    />
                                                </div>
                                                <div className='chat-main-content'>
                                                    <div className='comment-main'>
                                                        <div className='comment'>
                                                            Sed varius bibendum nisl vel ullamcorper. Pellentesque mollis, nisl sed blandit rhoncus, massa nulla aliquet enim, ut varius tortor orci ac diam. Donec semper ante eu
                                                        </div>
                                                        <span className='time'>12:36</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='chat-main'>
                                                <div className='chat-main-profile'>
                                                    <Image
                                                        src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/member-1.jpg`}
                                                        alt="Panache"
                                                        width={36}
                                                        height={36}
                                                        priority={true}
                                                    />
                                                </div>
                                                <div className='chat-main-content'>
                                                    <div className='comment-main'>
                                                        <div className='comment'>Nunc tincidunt eleifend urna                                                       </div>
                                                        <span className='time'>12:36</span>
                                                    </div>
                                                    <div className='comment-reply-main'>
                                                        <div className='comment-reply'>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a dolor ultricies, consequat eros id, rhoncus turpis. Nunc at ligula non sapien semper semper. Donec sit amet turpis sit amet justo hendrerit volutpat. Nunc dictum libero finibus nunc auctor vehicula. Nam pretium tellus massa, at faucibus augue finibus ac.
                                                        </div>
                                                        <span className='time'>15.21</span>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className='chat-main'>
                                                <div className='chat-main-profile'>
                                                    <Image
                                                        src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/member-1.jpg`}
                                                        alt="Panache"
                                                        width={36}
                                                        height={36}
                                                        priority={true}
                                                    />
                                                </div>
                                                <div className='chat-main-content'>
                                                    <div className='comment-main'>
                                                        <div className='comment'>
                                                            Sed a neque in felis commodo porta. Sed varius bibendum nisl vel ullamcorper. Pellentesque mollis, nisl sed blandit rhoncus, massa nulla aliquet enim, ut varius tortor orci ac diam. Donec semper ante eu
                                                        </div>
                                                        <span className='time'>12:36</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className='tab_details_value'>
                                        <div className='tab_comment'>
                                            <div className='assigned'>
                                                <h6>Assigned Counselor</h6>
                                                <div className='assigned-profile'>
                                                    <figure>
                                                        <Image
                                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/member-1.jpg`}
                                                            alt="Panache"
                                                            width={40}
                                                            height={40}
                                                            priority={true}
                                                        />
                                                    </figure>
                                                    <div className='con'>
                                                        <h5>John Doe</h5>
                                                        <p>Nunc tincidunt eleifend urna</p>
                                                    </div>
                                                </div>
                                                <div className='assigned-profile'>
                                                    <figure>
                                                        <Image
                                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/member-1.jpg`}
                                                            alt="Panache"
                                                            width={40}
                                                            height={40}
                                                            priority={true}
                                                        />
                                                    </figure>
                                                    <div className='con'>
                                                        <h5>Amanda D.</h5>
                                                        <p>Duis accumsan nibh id</p>
                                                    </div>
                                                </div>
                                                <div className='assigned-profile'>
                                                    <figure>
                                                        <Image
                                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/member-1.jpg`}
                                                            alt="Panache"
                                                            width={40}
                                                            height={40}
                                                            priority={true}
                                                        />
                                                    </figure>
                                                    <div className='con'>
                                                        <h5>Dylan Berry</h5>
                                                        <p>Vestibulum suscipit tincidunt</p>
                                                    </div>
                                                </div>
                                                <div className='assigned-profile'>
                                                    <figure>
                                                        <Image
                                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/member-1.jpg`}
                                                            alt="Panache"
                                                            width={40}
                                                            height={40}
                                                            priority={true}
                                                        />
                                                    </figure>
                                                    <div className='con'>
                                                        <h5>David Baker</h5>
                                                        <p>Fusce sit amet arcu nisl</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='assigned'>
                                                <h6>Admin</h6>
                                                <div className='assigned-profile'>
                                                    <figure>
                                                        <Image
                                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/member-1.jpg`}
                                                            alt="Panache"
                                                            width={40}
                                                            height={40}
                                                            priority={true}
                                                        />
                                                    </figure>
                                                    <div className='con'>
                                                        <h5>Andrew Doe</h5>
                                                        <p>Integer vel urna at arcu blandit</p>
                                                    </div>
                                                </div>
                                                <div className='assigned-profile'>
                                                    <figure>
                                                        <Image
                                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/member-1.jpg`}
                                                            alt="Panache"
                                                            width={40}
                                                            height={40}
                                                            priority={true}
                                                        />
                                                    </figure>
                                                    <div className='con'>
                                                        <h5>Amanda D.</h5>
                                                        <p>Duis accumsan nibh id</p>
                                                    </div>
                                                </div>
                                                <div className='assigned-profile'>
                                                    <figure>
                                                        <Image
                                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/member-1.jpg`}
                                                            alt="Panache"
                                                            width={40}
                                                            height={40}
                                                            priority={true}
                                                        />
                                                    </figure>
                                                    <div className='con'>
                                                        <h5>Amanda D.</h5>
                                                        <p>Duis accumsan nibh id</p>
                                                    </div>
                                                </div>
                                                <div className='assigned-profile'>
                                                    <figure>
                                                        <Image
                                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/member-1.jpg`}
                                                            alt="Panache"
                                                            width={40}
                                                            height={40}
                                                            priority={true}
                                                        />
                                                    </figure>
                                                    <div className='con'>
                                                        <h5>Dylan Berry</h5>
                                                        <p>Vestibulum suscipit tincidunt</p>
                                                    </div>
                                                </div>
                                                <div className='assigned-profile'>
                                                    <figure>
                                                        <Image
                                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/member-1.jpg`}
                                                            alt="Panache"
                                                            width={40}
                                                            height={40}
                                                            priority={true}
                                                        />
                                                    </figure>
                                                    <div className='con'>
                                                        <h5>David Baker</h5>
                                                        <p>Fusce sit amet arcu nisl</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className='tab_details_value'>
                                        <div className='tab_comment'>
                                            <div className='doc-row'>
                                                <div className='doc-col'>
                                                    <Link href="#">
                                                        <div className='eye'>
                                                            <Image
                                                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/eye-icon.svg`}
                                                                alt="Panache"
                                                                width={16}
                                                                height={10}
                                                                priority={true}
                                                            />
                                                        </div>
                                                        <Image
                                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/download-icon.svg`}
                                                            alt="Panache"
                                                            width={56}
                                                            height={60}
                                                            priority={true}
                                                        />
                                                        <p>CERTIFICATE 1</p>
                                                    </Link>
                                                </div>
                                                <div className='doc-col'>
                                                    <Link href="#">
                                                        <div className='eye'>
                                                            <Image
                                                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/eye-icon.svg`}
                                                                alt="Panache"
                                                                width={16}
                                                                height={10}
                                                                priority={true}
                                                            />
                                                        </div>
                                                        <Image
                                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/download-icon.svg`}
                                                            alt="Panache"
                                                            width={56}
                                                            height={60}
                                                            priority={true}
                                                        />
                                                        <p>AN KITIELTS 1</p>
                                                    </Link>
                                                </div>
                                                <div className='doc-col'>
                                                    <Link href="#">
                                                        <div className='eye'>
                                                            <Image
                                                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/eye-icon.svg`}
                                                                alt="Panache"
                                                                width={16}
                                                                height={10}
                                                                priority={true}
                                                            />
                                                        </div>
                                                        <Image
                                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/download-icon.svg`}
                                                            alt="Panache"
                                                            width={56}
                                                            height={60}
                                                            priority={true}
                                                        />
                                                        <p>CERTIFICATE 1</p>
                                                    </Link>
                                                </div>
                                                <div className='doc-col'>
                                                    <Link href="#">
                                                        <div className='eye'>
                                                            <Image
                                                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/eye-icon.svg`}
                                                                alt="Panache"
                                                                width={16}
                                                                height={10}
                                                                priority={true}
                                                            />
                                                        </div>
                                                        <Image
                                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/download-icon.svg`}
                                                            alt="Panache"
                                                            width={56}
                                                            height={60}
                                                            priority={true}
                                                        />
                                                        <p>CERTIFICATE 1</p>
                                                    </Link>
                                                </div>
                                                <div className='doc-col'>
                                                    <Link href="#">
                                                        <div className='eye'>
                                                            <Image
                                                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/eye-icon.svg`}
                                                                alt="Panache"
                                                                width={16}
                                                                height={10}
                                                                priority={true}
                                                            />
                                                        </div>
                                                        <Image
                                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/download-icon.svg`}
                                                            alt="Panache"
                                                            width={56}
                                                            height={60}
                                                            priority={true}
                                                        />
                                                        <p>CERTIFICATE 1</p>
                                                    </Link>
                                                </div>
                                                <div className='doc-col'>
                                                    <Link href="#">
                                                        <div className='eye'>
                                                            <Image
                                                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/eye-icon.svg`}
                                                                alt="Panache"
                                                                width={16}
                                                                height={10}
                                                                priority={true}
                                                            />
                                                        </div>
                                                        <Image
                                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/download-icon.svg`}
                                                            alt="Panache"
                                                            width={56}
                                                            height={60}
                                                            priority={true}
                                                        />
                                                        <p>AN KITIELTS 1</p>
                                                    </Link>
                                                </div>
                                                <div className='doc-col'>
                                                    <Link href="#">
                                                        <div className='eye'>
                                                            <Image
                                                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/eye-icon.svg`}
                                                                alt="Panache"
                                                                width={16}
                                                                height={10}
                                                                priority={true}
                                                            />
                                                        </div>
                                                        <Image
                                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/download-icon.svg`}
                                                            alt="Panache"
                                                            width={56}
                                                            height={60}
                                                            priority={true}
                                                        />
                                                        <p>CERTIFICATE 1</p>
                                                    </Link>
                                                </div>
                                                <div className='doc-col'>
                                                    <Link href="#">
                                                        <div className='eye'>
                                                            <Image
                                                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/eye-icon.svg`}
                                                                alt="Panache"
                                                                width={16}
                                                                height={10}
                                                                priority={true}
                                                            />
                                                        </div>
                                                        <Image
                                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/download-icon.svg`}
                                                            alt="Panache"
                                                            width={56}
                                                            height={60}
                                                            priority={true}
                                                        />
                                                        <p>CERTIFICATE 1</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='all-btn'>
                                            <Link href="#">Download All Documents</Link>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className='tab_details_value'>
                                        <div className='tab_comment'>
                                            <div className='no-content'>
                                                No Transaction
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className='tab_details_value'>
                                        <div className='tab_comment'>
                                            <div className='no-content'>
                                                No Reminders
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>


                    <ul className="pagination">
                        <li><Link href="/" className="prev"></Link></li>
                        <li><Link href="/" className="active">1</Link></li>
                        <li><Link href="/">2</Link></li>
                        <li><Link href="/">3</Link></li>
                        <li><Link href="/" className="next"></Link></li>
                    </ul>

                </div>
            </div>

        </>
    )
}

export default Communication;