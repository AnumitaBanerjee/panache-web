import React, { useState } from 'react'
import Slider from "react-slick";
import Image from 'next/image';
import MultiStepProgressBar from './MultiStepProgressBar';

const Dashboard = () => {
  const programSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  const universitySettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
              <Slider {...programSettings}>
                <div className="slider-content">
                  <span className="degree-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-icon.png`}
                      alt="Panache"
                      width={29}
                      height={21}
                      priority={true}
                    />
                    <p>BSc in Applied<br />Data Science</p>
                    <button className="apply-btn" type="button">APPLY</button>
                  </span>
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
                <div className="slider-content">
                  <span className="degree-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-icon.png`}
                      alt="Panache"
                      width={29}
                      height={21}
                      priority={true}
                    />
                    <p>BSc in Applied<br />Data Science</p>
                    <button className="apply-btn" type="button">APPLY</button>
                  </span>
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
                <div className="slider-content">
                  <span className="degree-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-icon.png`}
                      alt="Panache"
                      width={29}
                      height={21}
                      priority={true}
                    />
                    <p>BSc in Applied<br />Data Science</p>
                    <button className="apply-btn" type="button">APPLY</button>
                  </span>
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
                <div className="slider-content">
                  <span className="degree-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-icon.png`}
                      alt="Panache"
                      width={29}
                      height={21}
                      priority={true}
                    />
                    <p>BSc in Applied<br />Data Science</p>
                    <button className="apply-btn" type="button">APPLY</button>
                  </span>
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
                <div className="slider-content">
                  <span className="degree-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-icon.png`}
                      alt="Panache"
                      width={29}
                      height={21}
                      priority={true}
                    />
                    <p>BSc in Applied<br />Data Science</p>
                    <button className="apply-btn" type="button">APPLY</button>
                  </span>
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

                <div className="slider-content">
                  <span className="degree-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-icon.png`}
                      alt="Panache"
                      width={29}
                      height={21}
                      priority={true}
                    />
                    <p>BSc in Applied<br />Data Science</p>
                    <button className="apply-btn" type="button">APPLY</button>
                  </span>
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

                <div className="slider-content">
                  <span className="degree-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-icon.png`}
                      alt="Panache"
                      width={29}
                      height={21}
                      priority={true}
                    />
                    <p>BSc in Applied<br />Data Science</p>
                    <button className="apply-btn" type="button">APPLY</button>
                  </span>
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

                <div className="slider-content">
                  <span className="degree-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-icon.png`}
                      alt="Panache"
                      width={29}
                      height={21}
                      priority={true}
                    />
                    <p>BSc in Applied<br />Data Science</p>
                    <button className="apply-btn" type="button">APPLY</button>
                  </span>
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

                <div className="slider-content">
                  <span className="degree-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-icon.png`}
                      alt="Panache"
                      width={29}
                      height={21}
                      priority={true}
                    />
                    <p>BSc in Applied<br />Data Science</p>
                    <button className="apply-btn" type="button">APPLY</button>
                  </span>
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
            <h2>Search by University</h2>
            <div className="university-slider">
              <Slider {...universitySettings}>
                <div className="slider-content">
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
                    <p>VIEW PROGRAMS</p>
                  </div>
                </div>
                <div className="slider-content">
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
                    <p>VIEW PROGRAMS</p>
                  </div>
                </div>
                <div className="slider-content">
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
                    <p>VIEW PROGRAMS</p>
                  </div>
                </div>
                <div className="slider-content">
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
                    <p>VIEW PROGRAMS</p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;