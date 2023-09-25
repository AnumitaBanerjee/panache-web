import React, { useState } from 'react'
import Slider from "react-slick";
import Image from 'next/image';
import MultiStepProgressBar from './MultiStepProgressBar';

const Dashboard = () => {
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
          <div className="application-panel">
            <div className="application-status-panel">
              <h2>Application Status (for Acadia University)</h2>
              <span>Application ID: 25698745</span>
              <span className="application-book">
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/book-icon.png`}
                  alt="Panache"
                  width={16}
                  height={16}
                  priority={true}
                />
              </span>
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
          <div className="search-programs-panel">
            <h2>Search by Programs</h2>
            <div className="programs-slider">
              <Slider {...settings}>
                <div className="slider-content">
                  <h3>1</h3>
                </div>
                <div className="slider-content">
                  <span className="degree-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-icon.png`}
                      alt="Panache"
                      width={29}
                      height={21}
                      priority={true}
                    />
                    <p>BSc in Applied<br/>Data Science</p>
                    <button className="apply-btn" type="button">APPLY</button>
                  </span>
                </div>
                <div className="slider-content">
                  <h3>3</h3>
                </div>
                <div className="slider-content">
                  <h3>4</h3>
                </div>
                <div className="slider-content">
                  <h3>5</h3>
                </div>
              </Slider>
            </div>
          </div>
          <div className="search-university-panel">
            <h2>Search by University</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;