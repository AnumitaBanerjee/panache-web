import React from 'react';
import Image from 'next/image';

const Header = () => {
    return (
        <>
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
        </>
    )
}

export default Header