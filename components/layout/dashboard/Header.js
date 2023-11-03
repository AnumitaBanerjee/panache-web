import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <>
            <div className="header-pane">
                <div className="d-flex align-items-center">
                    <div className="search-pane-main">
                        <div className="search-pane">
                            <input type="text" onClick={() => setToggle(!toggle)} />
                            <Image
                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/search-icon.png`}
                                alt="Panache"
                                width={16}
                                height={16}
                                priority={true}
                            />
                        </div>
                        {toggle && (
                            <div className="search-group">
                                <div className="top-searches">
                                    <h3>Top searches</h3>
                                    <ul className='searches-list'>
                                        <li>
                                            <Link href="#">Electrical</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Engineering</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Medical</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Entrance</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Quisque</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Acadia University</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Algonquin College</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="browse-categories">
                                    <h3 className='mb-2'>Browse categories</h3>
                                    <ul className='browse-list'>
                                        <li>
                                            <Link href="/search-by-programs">Search by Programs</Link>
                                        </li>
                                        <li>
                                            <Link href="/search-by-universities">Search by Universities</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="right-pane-main">
                        <div className="right-pane">
                            <div className="notification-btn">
                                <Link href='/notifications'>
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/notification-icon.png`}
                                        alt="Panache"
                                        width={16}
                                        height={16}
                                        priority={true}
                                    />
                                </Link>
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