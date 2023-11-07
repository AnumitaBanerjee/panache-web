import React, { useState } from 'react'
import Image from 'next/image';
import Link from "next/link";
import AgreementPolicyModal from "../modal/AgreementPolicy";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useRouter } from 'next/router'

const LoginAgent = () => {
    const router = useRouter();

    // Agreement Policy
    const [show, setShow] = useState(false);
    const [modelitems, setmodeldata] = useState([]);

    const handleClose = () => setShow(false);
    const openModal = (e) => {
        setShow(true);
    }


    return (
        <>
            <div className="login-panel">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-panel">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/agent-img.png`}
                                    alt="Panache"
                                    width={750}
                                    height={450}
                                    priority={true}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-panel">
                                <div className='agent-tab orange-tab'>
                                    <Tabs>
                                        <TabList>
                                            <Tab>Log In</Tab>
                                            <Tab>SIgn Up</Tab>
                                        </TabList>
                                        <TabPanel>
                                            <h1>Welcome back Agent,</h1>
                                            <p>Good to see you again</p>
                                            <form>
                                                <div className="form-floating mb-3">
                                                    <input type="email" placeholder="Agent Id" className="form-control" id="AgentId" />
                                                    <label htmlFor="AgentId">Agent Id</label>
                                                    <span className="input-icon">
                                                        <Image
                                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/email-icon.png`}
                                                            alt="Panache"
                                                            width={18}
                                                            height={14.67}
                                                            priority={true}
                                                        />
                                                    </span>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input type="password" placeholder="password" className="form-control" id="Password" />
                                                    <label htmlFor="Password">Password</label>
                                                    <span className="input-icon">
                                                        <Image
                                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/lock-icon.png`}
                                                            alt="Panache"
                                                            width={15}
                                                            height={18}
                                                            priority={true}
                                                        />
                                                    </span>
                                                    <span className="hide-icon">
                                                        <Image
                                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/hide-icon.png`}
                                                            alt="Panache"
                                                            width={18}
                                                            height={14}
                                                            priority={true}
                                                        />
                                                    </span>
                                                </div>
                                                <span className="d-flex"><Link href="/forgot-password">Forgot Password</Link></span>

                                                <button
                                                    onClick={() => openModal()}
                                                    type="button"
                                                    className="btn login-btn"
                                                >
                                                    LOGIN
                                                </button>
                                            </form>
                                        </TabPanel>
                                        <TabPanel>
                                            <h1>Hello there,</h1>
                                            <p>We are excited to see you here</p>
                                            <form>

                                                <div className='row mb-4'>
                                                    <div className='col-md-6'>
                                                        <div className="form-floating">
                                                            <input type="text" placeholder="John" className="form-control" id="CompanyName" />
                                                            <label htmlFor="CompanyName">Company Name</label>
                                                            <span className="input-icon">
                                                                <Image
                                                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/business-icon.png`}
                                                                    alt="Panache"
                                                                    width={20}
                                                                    height={18}
                                                                    priority={true}
                                                                />
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className="form-floating">
                                                            <input type="text" placeholder="password" className="form-control" id="Address" />
                                                            <label htmlFor="Address">Address</label>
                                                            <span className="input-icon">
                                                                <Image
                                                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/address-icon.png`}
                                                                    alt="Panache"
                                                                    width={16}
                                                                    height={18}
                                                                    priority={true}
                                                                />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='form-flex mb-4'>
                                                    <div className="form-floating">
                                                        <input type="text" placeholder="First Name" className="form-control" id="FirstName" />
                                                        <label htmlFor="FirstName">First Name</label>
                                                        <span className="input-icon">
                                                            <Image
                                                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/firstname-icon.png`}
                                                                alt="Panache"
                                                                width={14}
                                                                height={18}
                                                                priority={true}
                                                            />
                                                        </span>
                                                    </div>
                                                    <div className="form-floating form-floating-last">
                                                        <input type="text" placeholder="Last Name" className="form-control" id="LastName" />
                                                        <label htmlFor="LastName">Last Name</label>
                                                    </div>
                                                </div>
                                                <div className='row mb-4'>
                                                    <div className='col-md-6'>
                                                        <div className="form-floating">
                                                            <input type="text" placeholder="First Name" className="form-control" id="MobileNumber" />
                                                            <label htmlFor="MobileNumber">Mobile Number</label>
                                                            <span className="input-icon">
                                                                <Image
                                                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/mobile-o-icon.png`}
                                                                    alt="Panache"
                                                                    width={14}
                                                                    height={20}
                                                                    priority={true}
                                                                />
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className="form-floating">
                                                            <input type="text" placeholder="password" className="form-control" id="EmailAddress" />
                                                            <label htmlFor="EmailAddress">Email Address</label>
                                                            <span className="input-icon">
                                                                <Image
                                                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/email-icon.png`}
                                                                    alt="Panache"
                                                                    width={18}
                                                                    height={15}
                                                                    priority={true}
                                                                />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input type="password" placeholder="password" className="form-control" id="Password" />
                                                    <label htmlFor="Password">Password</label>
                                                    <span className="input-icon">
                                                        <Image
                                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/lock-icon.png`}
                                                            alt="Panache"
                                                            width={15}
                                                            height={18}
                                                            priority={true}
                                                        />
                                                    </span>
                                                    <span className="hide-icon">
                                                        <Image
                                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/hide-icon.png`}
                                                            alt="Panache"
                                                            width={18}
                                                            height={14}
                                                            priority={true}
                                                        />
                                                    </span>
                                                </div>
                                                <span className="d-flex"><Link href="/forgot-password">Forgot Password</Link></span>
                                                <button
                                                    onClick={() => router.push('/upload-documents')}
                                                    type="button"
                                                    className="btn login-btn"
                                                >
                                                    Signup
                                                </button>
                                            </form>
                                        </TabPanel>
                                    </Tabs>
                                </div>
                                <div className="login-footer">
                                    <h3>Or continue with</h3>
                                    <div className="social-btn">
                                        <button className="facebook-btn" type="button">
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/facebook-icon.png`}
                                                alt="Panache"
                                                width={20.12}
                                                height={20}
                                                priority={true}
                                            />Facebook
                                        </button>
                                        <button className="google-btn" type="button">
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/google-icon.png`}
                                                alt="Panache"
                                                width={19.49}
                                                height={20}
                                                priority={true}
                                            />Google
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AgreementPolicyModal
                show={show}
                onHide={handleClose}
                modelitems={modelitems}
            />
        </>
    )
}

export default LoginAgent;