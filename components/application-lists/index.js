import React from "react";
import Image from "next/image";
import Link from "next/link";


const ApplicationLists = (props) => {
    return (
        <>
            <div className="content-wrapper">
                <div className="header-pane">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="search-pane">
                                <input type="text" />
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/search-icon.png`}
                                    alt="Panache"
                                    width={16}
                                    height={16}
                                    priority={true}
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="right-pane">
                                <div className="notification-btn">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/notification-icon.png`}
                                        alt="Panache"
                                        width={16}
                                        height={16}
                                        priority={true}
                                    />
                                    <span className="notification-dot"></span>
                                </div>
                                <div className="profile-image"></div>
                                <p>Welcome<span>John Doe!</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-panel">
                    <div className="apply-list-pane-top">
                        <h2>Applications List</h2>
                        <Link href="/" className="apply-new-btn">Create New</Link>
                    </div>
                    <div className="apply-card-sec">

                        <div className="apply-card-inner">
                            <div className="apply-card-inner-top">
                            </div>
                            <div className="apply-card-inner-btm">

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
            </div>
        </>
    )
}

export default ApplicationLists;