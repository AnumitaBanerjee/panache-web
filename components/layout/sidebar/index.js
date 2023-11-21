import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

const Sidebar = () => {
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
                <div className="sidebar-search">
                    <div className="form-group has-search">
                        <span className="search-control form-control-feedback"></span>
                        <input type="text" className="form-control" placeholder="Search Courses Here..."/>
                    </div>
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
                                    alt="Application Lists"
                                    width={24}
                                    height={22}
                                    priority={true}
                                    className="img"
                                />
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/application-list-icon-a.png`}
                                    alt="Application Lists"
                                    width={24}
                                    height={22}
                                    priority={true}
                                    className="img-active"
                                />
                                <span>Application Lists</span>
                            </Link>
                        </li>
                        <li className={router.pathname == "/university-lists" ? "active" : ""}>
                            <Link href="/university-lists" className="">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/university-list-icon.png`}
                                    alt="University Lists"
                                    width={26}
                                    height={26}
                                    priority={true}
                                    className="img"
                                />
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/university-list-icon-a.png`}
                                    alt="University Lists"
                                    width={26}
                                    height={26}
                                    priority={true}
                                    className="img-active"
                                />
                                <span>University Lists</span>
                            </Link>
                        </li>
                        <li className={router.pathname == "/recommended-programs" ? "active" : ""}>
                            <Link href="/recommended-programs" className="">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/recommended-icon.png`}
                                    alt="Recommended Programs"
                                    width={27}
                                    height={26}
                                    priority={true}
                                    className="img"
                                />
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/recommended-icon-a.png`}
                                    alt="Recommended Programs"
                                    width={27}
                                    height={26}
                                    priority={true}
                                    className="img-active"
                                />
                                <span>Recommended Programs</span>
                            </Link>
                        </li>
                        <li className={router.pathname == "/pending-tasks" ? "active" : ""}>
                            <Link href="/pending-tasks" className="">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/pending-icon.png`}
                                    alt="Pending Tasks"
                                    width={25}
                                    height={25}
                                    priority={true}
                                    className="img"
                                />
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/pending-icon-a.png`}
                                    alt="Pending Tasks"
                                    width={25}
                                    height={25}
                                    priority={true}
                                    className="img-active"
                                />
                                <span>Pending Tasks</span>
                            </Link>
                        </li>
                        <li className={router.pathname == "/financial-aid-information" ? "active" : ""}>
                            <Link href="/financial-aid-information" className="">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/financial-icon.png`}
                                    alt="Financial Aid Information"
                                    width={23}
                                    height={27}
                                    priority={true}
                                    className="img"
                                />
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/financial-icon-a.png`}
                                    alt="Financial Aid Information"
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
                        <li className={router.pathname == "/account-settings" ? "active" : ""}>
                            <Link href="/account-settings" className="">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/account-icon.png`}
                                    alt="Account Settings"
                                    width={18}
                                    height={22}
                                    priority={true}
                                    className="img"
                                />
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/account-icon-a.png`}
                                    alt="Account Settings"
                                    width={18}
                                    height={22}
                                    priority={true}
                                    className="img-active"
                                />
                                <span>Account Settings</span>
                            </Link>
                        </li>
                        <li className={router.pathname == "/student-profiles" ? "active" : ""}>
                            <Link href="/student-profiles" className="">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/student-icon.png`}
                                    alt="Student Profiles"
                                    width={28}
                                    height={22}
                                    priority={true}
                                    className="img"
                                />
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/student-icon-a.png`}
                                    alt="Student Profiles"
                                    width={28}
                                    height={22}
                                    priority={true}
                                    className="img-active"
                                />
                                <span>Student Profiles</span>
                            </Link>
                        </li>
                        <li className={router.pathname == "/upcoming-appointment" ? "active" : ""}>
                            <Link href="/upcoming-appointment" className="">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/upcoming-icon.png`}
                                    alt="Upcoming Appointments"
                                    width={20}
                                    height={22}
                                    priority={true}
                                    className="img"
                                />
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/upcoming-icon-a.png`}
                                    alt="Upcoming Appointments"
                                    width={20}
                                    height={22}
                                    priority={true}
                                    className="img-active"
                                />
                                <span>Upcoming Appointments</span>
                            </Link>
                        </li>
                        <li className={router.pathname == "/commissions" ? "active" : ""}>
                            <Link href="/commissions" className="">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/commissions-icon.png`}
                                    alt="Commissions"
                                    width={26}
                                    height={26}
                                    priority={true}
                                    className="img"
                                />
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/commissions-icon-a.png`}
                                    alt="Commissions"
                                    width={26}
                                    height={26}
                                    priority={true}
                                    className="img-active"
                                />
                                <span>Commissions</span>
                            </Link>
                        </li>
                        <li className={router.pathname == "/invoices" ? "active" : ""}>
                            <Link href="/invoices" className="">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/invoices-icon.png`}
                                    alt="Invoices"
                                    width={26}
                                    height={26}
                                    priority={true}
                                    className="img"
                                />
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/invoices-icon-a.png`}
                                    alt="Invoices"
                                    width={26}
                                    height={26}
                                    priority={true}
                                    className="img-active"
                                />
                                <span>Invoices</span>
                            </Link>
                        </li>
                        <li className={router.pathname == "/template" ? "active" : ""}>
                            <Link href="/template" className="">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/template-icon.png`}
                                    alt="Template"
                                    width={26}
                                    height={26}
                                    priority={true}
                                    className="img"
                                />
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/template-icon-a.png`}
                                    alt="Template"
                                    width={26}
                                    height={26}
                                    priority={true}
                                    className="img-active"
                                />
                                <span>Template</span>
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