import React, { useState } from 'react'
import Slider from "react-slick";
import Image from 'next/image';
import Link from "next/link";
import MultiStepProgressBar from '../dashboard/MultiStepProgressBar';

const ApplicationLists = (props) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const [page, setPage] = useState("pageone");

    const nextPage = (page) => {
        setPage(page);
    };

    const nextPageNumber = (pageNumber) => {
        switch (pageNumber) {
            case "1":
                setPage("pageone");
                break;
            case "2":
                setPage("pagetwo");
                break;
            case "3":
                setPage("pagethree");
                break;
            case "4":
                setPage("pagefour");
                break;
            case "5":
                setPage("pagefive");
                break;
            case "6":
                setPage("pagesix");
                break;
            case "7":
                setPage("pageseven");
                break;
            case "8":
                setPage("pageeight");
                break;
            case "9":
                setPage("pagenine");
                break;
            case "10":
                alert("Ooops! Seems like you did not fill the form.");
                break;
            default:
                setPage("1");
        }
    };

    return (
        <>
            <div className="content-panel">
                <div className="apply-list-pane-top">
                    <h2>Applications List</h2>
                    <Link href="/" className="apply-new-btn">Create New</Link>
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
                                            <li className="tel">0987654321</li>
                                            <li className="mail">Samplemail@lorem.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="apply-card-btns">
                                <div className="apply-card-btn-inner">
                                    <Link href="/" className="btn-orange btn">Remarks</Link>
                                    <Link href="/" className="btn-blue btn">Communication</Link>
                                </div>
                            </div>
                        </div>
                        <div className="apply-card-inner-btm">
                            <div className="apply-card-inner-btm-head">
                                <p className="aarea">Acadia University, Canada</p>
                                <p className="tadke">Intake: <span>Jan 2023</span></p>
                            </div>
                            <div className="application-progress-panel">
                                <div className="end-act-date">
                                    <span>Est. Date</span>
                                    <span>Actual Date</span>
                                </div>
                                <MultiStepProgressBar
                                    page={page}
                                    onPageNumberClick={nextPageNumber}
                                />
                                {
                                    {
                                        pageone: <span onClick={nextPage} />,
                                        pagetwo: <span onClick={nextPage} />,
                                        pagethree: <span onClick={nextPage} />,
                                        pagefour: <span onClick={nextPage} />,
                                        pagefive: <span onClick={nextPage} />,
                                        pagesix: <span onClick={nextPage} />,
                                        pageseven: <span onClick={nextPage} />,
                                        pageeight: <span onClick={nextPage} />,
                                        pagenine: <span />
                                    }[page]
                                }
                            </div>
                        </div>
                    </div>

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
                                            <li className="tel">0987654321</li>
                                            <li className="mail">Samplemail@lorem.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="apply-card-btns">
                                <div className="apply-card-btn-inner">
                                    <Link href="/" className="btn-orange btn">Remarks</Link>
                                    <Link href="/" className="btn-blue btn">Communication</Link>
                                </div>
                            </div>
                        </div>
                        <div className="apply-card-inner-btm">
                            <div className="apply-card-inner-btm-head">
                                <p className="aarea">Acadia University, Canada</p>
                                <p className="tadke">Intake: <span>Jan 2023</span></p>
                            </div>
                            <div className="application-progress-panel">
                                <div className="end-act-date">
                                    <span>Est. Date</span>
                                    <span>Actual Date</span>
                                </div>
                                <MultiStepProgressBar
                                    page={page}
                                    onPageNumberClick={nextPageNumber}
                                />
                                {
                                    {
                                        pageone: <span onClick={nextPage} />,
                                        pagetwo: <span onClick={nextPage} />,
                                        pagethree: <span onClick={nextPage} />,
                                        pagefour: <span onClick={nextPage} />,
                                        pagefive: <span onClick={nextPage} />,
                                        pagesix: <span onClick={nextPage} />,
                                        pageseven: <span onClick={nextPage} />,
                                        pageeight: <span onClick={nextPage} />,
                                        pagenine: <span />
                                    }[page]
                                }
                            </div>
                        </div>
                    </div>

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
                                            <li className="tel">0987654321</li>
                                            <li className="mail">Samplemail@lorem.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="apply-card-btns">
                                <div className="apply-card-btn-inner">
                                    <Link href="/" className="btn-orange btn">Remarks</Link>
                                    <Link href="/" className="btn-blue btn">Communication</Link>
                                </div>
                            </div>
                        </div>
                        <div className="apply-card-inner-btm">
                            <div className="apply-card-inner-btm-head">
                                <p className="aarea">Acadia University, Canada</p>
                                <p className="tadke">Intake: <span>Jan 2023</span></p>
                            </div>
                            <div className="application-progress-panel">
                                <div className="end-act-date">
                                    <span>Est. Date</span>
                                    <span>Actual Date</span>
                                </div>
                                <MultiStepProgressBar
                                    page={page}
                                    onPageNumberClick={nextPageNumber}
                                />
                                {
                                    {
                                        pageone: <span onClick={nextPage} />,
                                        pagetwo: <span onClick={nextPage} />,
                                        pagethree: <span onClick={nextPage} />,
                                        pagefour: <span onClick={nextPage} />,
                                        pagefive: <span onClick={nextPage} />,
                                        pagesix: <span onClick={nextPage} />,
                                        pageseven: <span onClick={nextPage} />,
                                        pageeight: <span onClick={nextPage} />,
                                        pagenine: <span />
                                    }[page]
                                }
                            </div>
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

export default ApplicationLists;