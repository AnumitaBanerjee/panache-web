import React, { useState } from 'react'
import Slider from "react-slick";
import Image from 'next/image';
import MultiStepProgressBar from './MultiStepProgressBar';
import Link from "next/link";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import ApplicationModal from "../modal/ApplicationModal";
import ProgramsModal from "../modal/ProgramsModal";

const StudentDashboard = () => {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            click to view courses checklist
        </Tooltip>
    );

    const [show, setShow] = useState(false);
    const [modelitems, setmodeldata] = useState([]);

    const handleClose = () => setShow(false);
    const openModal = (e) => {
        setShow(true);
    }

    const [programmeShow, setProgrammeShow] = useState(false);
    const [programmeModelitems, setProgrammeModeldata] = useState([]);

    const programmeHandleClose = () => setProgrammeShow(false);
    const programmeOpenModal = (e) => {
        setProgrammeShow(true);
    }


    var applicationSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        dots: true,
        arrows: false,
    };

    var programSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            }
        ]
    };


    var universitySettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            }
        ]
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
            <div className="content-panel dashboard">

                <div className="application-slider mb-4">
                    <Slider {...applicationSettings}>
                        <div className="application-panel">
                            <div className="application-status-panel">
                                <h2>Application Status (for Acadia University)</h2>
                                <span>Application ID: 25698745</span>
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}    >
                                    <Link href='#' className="application-book" onClick={() => openModal()}>
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/book-icon.png`}
                                            alt="Panache"
                                            width={11}
                                            height={13}
                                            priority={true}
                                        />
                                    </Link>
                                </OverlayTrigger>
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
                        <div className="application-panel">
                            <div className="application-status-panel">
                                <h2>Application Status (for Acadia University)</h2>
                                <span>Application ID: 25698745</span>
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}    >
                                    <Link href='#' className="application-book" onClick={() => openModal()}>
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/book-icon.png`}
                                            alt="Panache"
                                            width={11}
                                            height={13}
                                            priority={true}
                                        />
                                    </Link>
                                </OverlayTrigger>
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
                        <div className="application-panel">
                            <div className="application-status-panel">
                                <h2>Application Status (for Acadia University)</h2>
                                <span>Application ID: 25698745</span>
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}    >
                                    <Link href='#' className="application-book" onClick={() => openModal()}>
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/book-icon.png`}
                                            alt="Panache"
                                            width={11}
                                            height={13}
                                            priority={true}
                                        />
                                    </Link>
                                </OverlayTrigger>
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
                    </Slider>
                </div>


                <div className="search-programs-panel mb-4">
                    <div className='headin-area'>
                        <h2>Search by Programs</h2>
                        <Link href="/search-by-programs">See All</Link>
                    </div>
                    <div className="programs-slider">
                        <Slider {...programSettings}>
                            <div className="slider-content programs-content">
                                <div className="degree-pane">
                                    <div className="degree-pane-in">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-icon.png`}
                                            alt="Panache"
                                            width={29}
                                            height={21}
                                            priority={true}
                                        />
                                        <p>BSc in Applied<br />Data Science</p>
                                    </div>
                                    <button className="apply-btn" type="button" onClick={() => programmeOpenModal()}>APPLY</button>
                                </div>
                                <h5>Modal University (Austria)</h5>
                                <div className="fee-panel">
                                    <p>Application Fee<span>$5059</span></p>
                                    <p>Tutio Fee<span>$50</span></p>
                                </div>
                                <div className="time-panel">
                                    <ul>
                                        <li className='first'>
                                            Sep, 2023 (Open)
                                        </li>
                                        <li className='second'>
                                            36 months
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="slider-content programs-content">
                                <div className="degree-pane">
                                    <div className="degree-pane-in">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-icon.png`}
                                            alt="Panache"
                                            width={29}
                                            height={21}
                                            priority={true}
                                        />
                                        <p>BSc in Applied<br />Data Science</p>
                                    </div>
                                    <button className="apply-btn" type="button" onClick={() => programmeOpenModal()}>APPLY</button>
                                </div>
                                <h5>Modal University (Austria)</h5>
                                <div className="fee-panel">
                                    <p>Application Fee<span>$5059</span></p>
                                    <p>Tutio Fee<span>$50</span></p>
                                </div>
                                <div className="time-panel">
                                    <ul>
                                        <li className='first'>
                                            Sep, 2023 (Open)
                                        </li>
                                        <li className='second'>
                                            36 months
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="slider-content programs-content">
                                <div className="degree-pane">
                                    <div className="degree-pane-in">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-icon.png`}
                                            alt="Panache"
                                            width={29}
                                            height={21}
                                            priority={true}
                                        />
                                        <p>BSc in Applied<br />Data Science</p>
                                    </div>
                                    <button className="apply-btn" type="button" onClick={() => programmeOpenModal()}>APPLY</button>
                                </div>
                                <h5>Modal University (Austria)</h5>
                                <div className="fee-panel">
                                    <p>Application Fee<span>$5059</span></p>
                                    <p>Tutio Fee<span>$50</span></p>
                                </div>
                                <div className="time-panel">
                                    <ul>
                                        <li className='first'>
                                            Sep, 2023 (Open)
                                        </li>
                                        <li className='second'>
                                            36 months
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="slider-content programs-content">
                                <div className="degree-pane">
                                    <div className="degree-pane-in">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-icon.png`}
                                            alt="Panache"
                                            width={29}
                                            height={21}
                                            priority={true}
                                        />
                                        <p>BSc in Applied<br />Data Science</p>
                                    </div>
                                    <button className="apply-btn" type="button" onClick={() => programmeOpenModal()}>APPLY</button>
                                </div>
                                <h5>Modal University (Austria)</h5>
                                <div className="fee-panel">
                                    <p>Application Fee<span>$5059</span></p>
                                    <p>Tutio Fee<span>$50</span></p>
                                </div>
                                <div className="time-panel">
                                    <ul>
                                        <li className='first'>
                                            Sep, 2023 (Open)
                                        </li>
                                        <li className='second'>
                                            36 months
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className="search-university-panel">
                    <div className='headin-area'>
                        <h2>Search by University</h2>
                        <Link href="/search-by-university">See All</Link>
                    </div>
                    <div className="university-slider">
                        <Slider {...universitySettings}>
                            <div className="slider-content university-content">
                                <span className="university-pane">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/university-icon.png`}
                                        alt="Panache"
                                        width={29}
                                        height={21}
                                        priority={true}
                                    />
                                    <p>Acadia University<span>Canada</span></p>
                                </span>
                                <div className="university-middle-pane">
                                    <ul>
                                        <li><p>PGWP<span>Yes</span></p></li>
                                        <li><p>Shore Type<span>Both</span></p></li>
                                        <li><p>Campus/es<span>Wolfville</span></p></li>
                                    </ul>
                                </div>
                                <div className="university-footer-pane">
                                    <Link href="/university">VIEW PROGRAMS</Link>
                                </div>
                            </div>
                            <div className="slider-content university-content">
                                <span className="university-pane">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/university-icon.png`}
                                        alt="Panache"
                                        width={29}
                                        height={21}
                                        priority={true}
                                    />
                                    <p>Acadia University<span>Canada</span></p>
                                </span>
                                <div className="university-middle-pane">
                                    <ul>
                                        <li><p>PGWP<span>Yes</span></p></li>
                                        <li><p>Shore Type<span>Both</span></p></li>
                                        <li><p>Campus/es<span>Wolfville</span></p></li>
                                    </ul>
                                </div>
                                <div className="university-footer-pane">
                                    <Link href="/university">VIEW PROGRAMS</Link>
                                </div>
                            </div>
                            <div className="slider-content university-content">
                                <span className="university-pane">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/university-icon.png`}
                                        alt="Panache"
                                        width={29}
                                        height={21}
                                        priority={true}
                                    />
                                    <p>Acadia University<span>Canada</span></p>
                                </span>
                                <div className="university-middle-pane">
                                    <ul>
                                        <li><p>PGWP<span>Yes</span></p></li>
                                        <li><p>Shore Type<span>Both</span></p></li>
                                        <li><p>Campus/es<span>Wolfville</span></p></li>
                                    </ul>
                                </div>
                                <div className="university-footer-pane">
                                    <Link href="/university">VIEW PROGRAMS</Link>
                                </div>
                            </div>
                            <div className="slider-content university-content">
                                <span className="university-pane">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/university-icon.png`}
                                        alt="Panache"
                                        width={29}
                                        height={21}
                                        priority={true}
                                    />
                                    <p>Acadia University<span>Canada</span></p>
                                </span>
                                <div className="university-middle-pane">
                                    <ul>
                                        <li><p>PGWP<span>Yes</span></p></li>
                                        <li><p>Shore Type<span>Both</span></p></li>
                                        <li><p>Campus/es<span>Wolfville</span></p></li>
                                    </ul>
                                </div>
                                <div className="university-footer-pane">
                                    <Link href="/university">VIEW PROGRAMS</Link>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            <ApplicationModal
                show={show}
                onHide={handleClose}
                modelitems={modelitems}
            />
            <ProgramsModal
                show={programmeShow}
                onHide={programmeHandleClose}
                programmeModelitems={programmeModelitems}
            />
        </>
    )
}

export default StudentDashboard;