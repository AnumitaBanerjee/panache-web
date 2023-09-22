import React from 'react'
import Link from "next/link";
import Image from 'next/image';

const Sidebar = () => {
    return (
        <>
            <div className="sidebar-panel">
                <div className="logo">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/dashboard-logo.png`}
                        alt="logo"
                        width={259}
                        height={30}
                        priority={true}
                    />
                </div>
                <div className="sidebar-menu">
                    <ul>
                        <li>
                            <Link href="/dashboard" className="">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/dashboard-icon.png`}
                                    alt="logo"
                                    width={22}
                                    height={22}
                                    priority={true}
                                />
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/application-list-icon.png`}
                                    alt="logo"
                                    width={22}
                                    height={22}
                                    priority={true}
                                />
                                <span>Application Lists</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/university-list-icon.png`}
                                    alt="logo"
                                    width={22}
                                    height={22}
                                    priority={true}
                                />
                                <span>University Lists</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/recommended-icon.png`}
                                    alt="logo"
                                    width={22}
                                    height={22}
                                    priority={true}
                                />
                                <span>Recommended Programs</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/pending-icon.png`}
                                    alt="logo"
                                    width={22}
                                    height={22}
                                    priority={true}
                                />
                                <span>Pending Tasks</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/financial-icon.png`}
                                    alt="logo"
                                    width={22}
                                    height={22}
                                    priority={true}
                                />
                                <span>Financial Aid Information</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/chat-icon.png`}
                                    alt="logo"
                                    width={22}
                                    height={22}
                                    priority={true}
                                />
                                <span>Chat</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/account-icon.png`}
                                    alt="logo"
                                    width={22}
                                    height={22}
                                    priority={true}
                                />
                                <span>Account Settings</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="logout-pane">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/logout-icon.png`}
                            alt="logo"
                            width={22}
                            height={22}
                            priority={true}
                        />
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;