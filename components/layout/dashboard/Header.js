import React from 'react';
import Image from 'next/image';

const Header = () => {
    return (
        <>
            <div className="header-pane">
                <div className="d-flex align-items-center">
                    <div className="search-pane-main">
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
                    <div className="right-pane-main">
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
                            <div className="profile-image">
                                <figure>
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/advisors-1.jpg`}
                                        alt="Panache"
                                        width={48}
                                        height={48}
                                        priority={true}
                                    />
                                </figure>
                                <p>Welcome<span>John Doe!</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header