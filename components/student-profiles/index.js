import React, { useState } from 'react'
import Slider from "react-slick";
import Image from 'next/image';
import Link from "next/link";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import ProfileModal from "../modal/ProfileModal";

const StudentProfiles = (props) => {

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            click to view Application List
        </Tooltip>
    );

    const [show, setShow] = useState(false);
    const [modelitems, setmodeldata] = useState([]);

    const handleClose = () => setShow(false);
    const openModal = (e) => {
        setShow(true);
    }

    return (
        <>
            <div className="content-panel student-profiles">
                <div className="apply-list-pane-top">
                    <h2>Student Profiles</h2>
                    <Link href="#" className="apply-new-btn" onClick={() => openModal()}>Create New</Link>
                </div>
                <div className="student-profiles-pane">
                    <div className="student-profiles-container student-head">
                        <div class="student-row">
                            <div class="student-col">
                                <h6>Name</h6>
                            </div>
                            <div class="student-col">
                                <h6>Country & State</h6>
                            </div>
                            <div class="student-col">
                                <h6>Application</h6>
                            </div>
                            <div class="student-col">
                                <h6>Status</h6>
                            </div>
                            <div class="student-col">
                                <h6>Created By</h6>
                            </div>
                            <div class="student-col">
                            </div>
                        </div>
                    </div>

                    <div className="student-profiles-container">
                        <div class="student-row">
                            <div class="student-col">
                                <div className='student-item'>
                                    <div className="student-profile">
                                        <div className="student-profile-img">
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/user-1.jpg`}
                                                alt="Panache"
                                                width={41}
                                                height={41}
                                                priority={true}
                                            />
                                        </div>
                                        <div className="student-profile-details">
                                            <h3>Olivia Jason</h3>
                                            <span className="student-id">Student ID: 25698745</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="student-col">
                                <div className='student-item'>
                                    <span>India, Punjab</span>
                                </div>
                            </div>
                            <div class="student-col">
                                <div className='student-item'>
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip}    >
                                        <Link href='/application-lists' className="application-book">
                                            View
                                        </Link>
                                    </OverlayTrigger>
                                </div>
                            </div>
                            <div class="student-col">
                                <div className='student-item'>
                                    <span>Student Created</span>
                                </div>
                            </div>
                            <div class="student-col">
                                <div className='student-item'>
                                    <span>Mason Genre</span>
                                </div>
                            </div>
                            <div class="student-col">
                                <div className='student-item'>
                                    <div className="apply-card-btn-inner">
                                        <Link href="#" className="btn-update btns" onClick={() => openModal()}>Update Profile</Link>
                                        <Link href="/recommended-programs" className="btn-reco btns">Recommendation</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="student-profiles-container">
                        <div class="student-row">
                            <div class="student-col">
                                <div className='student-item'>
                                    <div className="student-profile">
                                        <div className="student-profile-img">
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/user-1.jpg`}
                                                alt="Panache"
                                                width={41}
                                                height={41}
                                                priority={true}
                                            />
                                        </div>
                                        <div className="student-profile-details">
                                            <h3>Olivia Jason</h3>
                                            <span className="student-id">Student ID: 25698745</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="student-col">
                                <div className='student-item'>
                                    <span>India, Punjab</span>
                                </div>
                            </div>
                            <div class="student-col">
                                <div className='student-item'>
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip}    >
                                        <Link href='/application-lists' className="application-book">
                                            View
                                        </Link>
                                    </OverlayTrigger>
                                </div>
                            </div>
                            <div class="student-col">
                                <div className='student-item'>
                                    <span>Student Created</span>
                                </div>
                            </div>
                            <div class="student-col">
                                <div className='student-item'>
                                    <span>Mason Genre</span>
                                </div>
                            </div>
                            <div class="student-col">
                                <div className='student-item'>
                                    <div className="apply-card-btn-inner">
                                        <Link href="#" className="btn-update btns" onClick={() => openModal()}>Update Profile</Link>
                                        <Link href="/recommended-programs" className="btn-reco btns">Recommendation</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="student-profiles-container">
                        <div class="student-row">
                            <div class="student-col">
                                <div className='student-item'>
                                    <div className="student-profile">
                                        <div className="student-profile-img">
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/user-1.jpg`}
                                                alt="Panache"
                                                width={41}
                                                height={41}
                                                priority={true}
                                            />
                                        </div>
                                        <div className="student-profile-details">
                                            <h3>Olivia Jason</h3>
                                            <span className="student-id">Student ID: 25698745</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="student-col">
                                <div className='student-item'>
                                    <span>India, Punjab</span>
                                </div>
                            </div>
                            <div class="student-col">
                                <div className='student-item'>
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip}    >
                                        <Link href='/application-lists' className="application-book">
                                            View
                                        </Link>
                                    </OverlayTrigger>
                                </div>
                            </div>
                            <div class="student-col">
                                <div className='student-item'>
                                    <span>Student Created</span>
                                </div>
                            </div>
                            <div class="student-col">
                                <div className='student-item'>
                                    <span>Mason Genre</span>
                                </div>
                            </div>
                            <div class="student-col">
                                <div className='student-item'>
                                    <div className="apply-card-btn-inner">
                                        <Link href="#" className="btn-update btns" onClick={() => openModal()}>Update Profile</Link>
                                        <Link href="/recommended-programs" className="btn-reco btns">Recommendation</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="student-profiles-container">
                        <div class="student-row">
                            <div class="student-col">
                                <div className='student-item'>
                                    <div className="student-profile">
                                        <div className="student-profile-img">
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/user-1.jpg`}
                                                alt="Panache"
                                                width={41}
                                                height={41}
                                                priority={true}
                                            />
                                        </div>
                                        <div className="student-profile-details">
                                            <h3>Olivia Jason</h3>
                                            <span className="student-id">Student ID: 25698745</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="student-col">
                                <div className='student-item'>
                                    <span>India, Punjab</span>
                                </div>
                            </div>
                            <div class="student-col">
                                <div className='student-item'>
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip}    >
                                        <Link href='/application-lists' className="application-book">
                                            View
                                        </Link>
                                    </OverlayTrigger>
                                </div>
                            </div>
                            <div class="student-col">
                                <div className='student-item'>
                                    <span>Student Created</span>
                                </div>
                            </div>
                            <div class="student-col">
                                <div className='student-item'>
                                    <span>Mason Genre</span>
                                </div>
                            </div>
                            <div class="student-col">
                                <div className='student-item'>
                                    <div className="apply-card-btn-inner">
                                        <Link href="#" className="btn-update btns" onClick={() => openModal()}>Update Profile</Link>
                                        <Link href="/recommended-programs" className="btn-reco btns">Recommendation</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="student-profiles-container">
                        <div class="student-row">
                            <div class="student-col">
                                <div className='student-item'>
                                    <div className="student-profile">
                                        <div className="student-profile-img">
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/user-1.jpg`}
                                                alt="Panache"
                                                width={41}
                                                height={41}
                                                priority={true}
                                            />
                                        </div>
                                        <div className="student-profile-details">
                                            <h3>Olivia Jason</h3>
                                            <span className="student-id">Student ID: 25698745</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="student-col">
                                <div className='student-item'>
                                    <span>India, Punjab</span>
                                </div>
                            </div>
                            <div class="student-col">
                                <div className='student-item'>
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip}    >
                                        <Link href='/application-lists' className="application-book">
                                            View
                                        </Link>
                                    </OverlayTrigger>
                                </div>
                            </div>
                            <div class="student-col">
                                <div className='student-item'>
                                    <span>Student Created</span>
                                </div>
                            </div>
                            <div class="student-col">
                                <div className='student-item'>
                                    <span>Mason Genre</span>
                                </div>
                            </div>
                            <div class="student-col">
                                <div className='student-item'>
                                    <div className="apply-card-btn-inner">
                                        <Link href="#" className="btn-update btns" onClick={() => openModal()}>Update Profile</Link>
                                        <Link href="/recommended-programs" className="btn-reco btns">Recommendation</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="student-profiles-container">
                        <div class="student-row">
                            <div class="student-col">
                                <div className='student-item'>
                                    <div className="student-profile">
                                        <div className="student-profile-img">
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/user-1.jpg`}
                                                alt="Panache"
                                                width={41}
                                                height={41}
                                                priority={true}
                                            />
                                        </div>
                                        <div className="student-profile-details">
                                            <h3>Olivia Jason</h3>
                                            <span className="student-id">Student ID: 25698745</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="student-col">
                                <div className='student-item'>
                                    <span>India, Punjab</span>
                                </div>
                            </div>
                            <div class="student-col">
                                <div className='student-item'>
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip}    >
                                        <Link href='/application-lists' className="application-book">
                                            View
                                        </Link>
                                    </OverlayTrigger>
                                </div>
                            </div>
                            <div class="student-col">
                                <div className='student-item'>
                                    <span>Student Created</span>
                                </div>
                            </div>
                            <div class="student-col">
                                <div className='student-item'>
                                    <span>Mason Genre</span>
                                </div>
                            </div>
                            <div class="student-col">
                                <div className='student-item'>
                                    <div className="apply-card-btn-inner">
                                        <Link href="#" className="btn-update btns" onClick={() => openModal()}>Update Profile</Link>
                                        <Link href="/recommended-programs" className="btn-reco btns">Recommendation</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <ProfileModal
                show={show}
                onHide={handleClose}
                modelitems={modelitems}
            />
        </>
    )
}

export default StudentProfiles;