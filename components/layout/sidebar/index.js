import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

const Sidebar = () => {

    // Menu
    const [menuClass, setMenuClass] = useState(false);
    const router = useRouter();


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
                        <li className={router.pathname == "/dashboard" ? "active" : ""}>
                            <Link href="/dashboard" className="">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/dashboard-icon.png`}
                                    alt="Dashboard"
                                    width={22}
                                    height={22}
                                    priority={true}
                                    className="img"
                                />
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/dashboard-icon-a.png`}
                                    alt="Dashboard"
                                    width={22}
                                    height={22}
                                    priority={true}
                                    className="img-active"
                                />
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li className={router.pathname == "/application-lists" ? "active" : ""}>
                            <Link href="/application-lists" className="">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/application-list-icon.png`}
                                    alt="Application"
                                    width={24}
                                    height={22}
                                    priority={true}
                                    className="img"
                                />
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/application-list-icon-a.png`}
                                    alt="Application"
                                    width={24}
                                    height={22}
                                    priority={true}
                                    className="img-active"
                                />
                                <span>Application Lists</span>
                            </Link>
                        </li>
                        <li className={router.pathname == "/university" ? "active" : ""}>
                            <Link href="/university" className="">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/university-list-icon.png`}
                                    alt="University"
                                    width={26}
                                    height={26}
                                    priority={true}
                                    className="img"
                                />
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/university-list-icon-a.png`}
                                    alt="University"
                                    width={26}
                                    height={26}
                                    priority={true}
                                    className="img-active"
                                />
                                <span>University Lists</span>
                            </Link>
                        </li>
                        <li className={router.pathname == "/recommended" ? "active" : ""}>
                            <Link href="/recommended" className="">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/recommended-icon.png`}
                                    alt="Recommended"
                                    width={27}
                                    height={26}
                                    priority={true}
                                    className="img"
                                />
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/recommended-icon-a.png`}
                                    alt="Recommended"
                                    width={27}
                                    height={26}
                                    priority={true}
                                    className="img-active"
                                />
                                <span>Recommended Programs</span>
                            </Link>
                        </li>
                        <li className={router.pathname == "/pending" ? "active" : ""}>
                            <Link href="/pending" className="">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/pending-icon.png`}
                                    alt="Pending"
                                    width={25}
                                    height={25}
                                    priority={true}
                                    className="img"
                                />
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/pending-icon-a.png`}
                                    alt="Pending"
                                    width={25}
                                    height={25}
                                    priority={true}
                                    className="img-active"
                                />
                                <span>Pending Tasks</span>
                            </Link>
                        </li>
                        <li className={router.pathname == "/financial" ? "active" : ""}>
                            <Link href="/financial" className="">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/financial-icon.png`}
                                    alt="Financial"
                                    width={23}
                                    height={27}
                                    priority={true}
                                    className="img"
                                />
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/financial-icon-a.png`}
                                    alt="Financial"
                                    width={23}
                                    height={27}
                                    priority={true}
                                    className="img-active"
                                />
                                <span>Financial Aid Information</span>
                            </Link>
                        </li>
                        <li className={router.pathname == "/chat" ? "active" : ""}>
                            <Link href="/chat" className="">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/chat-icon.png`}
                                    alt="Chat"
                                    width={24}
                                    height={24}
                                    priority={true}
                                    className="img"
                                />
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/chat-icon-a.png`}
                                    alt="Chat"
                                    width={24}
                                    height={24}
                                    priority={true}
                                    className="img-active"
                                />
                                <span>Chat</span>
                            </Link>
                        </li>
                        <li className={router.pathname == "/account" ? "active" : ""}>
                            <Link href="/account" className="">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/account-icon.png`}
                                    alt="Account"
                                    width={18}
                                    height={22}
                                    priority={true}
                                    className="img"
                                />
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/account-icon-a.png`}
                                    alt="Account"
                                    width={18}
                                    height={22}
                                    priority={true}
                                    className="img-active"
                                />
                                <span>Account Settings</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="logout-pane">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/logout-icon.png`}
                            alt="Logout"
                            width={22}
                            height={22}
                            priority={true}
                            className="img"
                        />
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/logout-icon-a.png`}
                            alt="Logout"
                            width={22}
                            height={22}
                            priority={true}
                            className="img-active"
                        />
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;