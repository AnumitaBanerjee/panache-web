import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Accordion from 'react-bootstrap/Accordion';
import ProgramsModal from "../modal/ProgramsModal";

const SearchByPrograms = () => {

  const [toggle, setToggle] = useState(false);

  const [ programmeShow, setProgrammeShow] = useState(false);
  const [ programmeModelitems, setProgrammeModeldata] = useState([]);

  const programmeHandleClose = () => setProgrammeShow(false);
  const programmeOpenModal = (e) => {
    setProgrammeShow(true);
  }


  return (
    <>
      <div className="content-panel">

        <div className='header-w-filter'>
          <div className="header-w-back">
            <Link href="/dashboard" className="back-btn">
              <figure>
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/back-icon.png`}
                  alt="Panache"
                  width={6}
                  height={12}
                  priority={true}
                />
              </figure>
              <span>Search by Programs</span>
            </Link>
          </div>
          <div className="filter-area" onClick={() => setToggle(!toggle)} >
            <figure>
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/filter-icon.svg`}
                alt="Panache"
                width={16}
                height={18}
                priority={true}
              />
            </figure>
            <span>Filter</span>
          </div>
          {toggle && (
            <div className="filter-group">
              <div className="filter-alphabet">
                <h3>Filter program by alphabet:</h3>
                <ul className='alphabet-list'>
                  <li>
                    <Link href="#">A</Link>
                  </li>
                  <li>
                    <Link href="#">B</Link>
                  </li>
                  <li>
                    <Link href="#">C</Link>
                  </li>
                  <li>
                    <Link href="#">D</Link>
                  </li>
                  <li>
                    <Link href="#">E</Link>
                  </li>
                  <li>
                    <Link href="#">F</Link>
                  </li>
                  <li>
                    <Link href="#">G</Link>
                  </li>
                  <li>
                    <Link href="#">H</Link>
                  </li>
                  <li>
                    <Link href="#">I</Link>
                  </li>
                  <li>
                    <Link href="#">J</Link>
                  </li>
                  <li>
                    <Link href="#">K</Link>
                  </li>
                  <li>
                    <Link href="#">L</Link>
                  </li>
                  <li>
                    <Link href="#">M</Link>
                  </li>
                  <li>
                    <Link href="#">N</Link>
                  </li>
                  <li>
                    <Link href="#">O</Link>
                  </li>
                  <li>
                    <Link href="#">P</Link>
                  </li>
                  <li>
                    <Link href="#">Q</Link>
                  </li>
                  <li>
                    <Link href="#">R</Link>
                  </li>
                  <li>
                    <Link href="#">S</Link>
                  </li>
                  <li>
                    <Link href="#">T</Link>
                  </li>
                  <li>
                    <Link href="#">U</Link>
                  </li>
                  <li>
                    <Link href="#">V</Link>
                  </li>
                  <li>
                    <Link href="#">A</Link>
                  </li>
                  <li>
                    <Link href="#">W</Link>
                  </li>
                  <li>
                    <Link href="#">X</Link>
                  </li>
                  <li>
                    <Link href="#">Y</Link>
                  </li>
                  <li>
                    <Link href="#">Z</Link>
                  </li>
                </ul>
              </div>
              <div className="filter-program">
                <h3>Filter program:</h3>
                <Accordion flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Country</Accordion.Header>
                    <Accordion.Body>
                      <div className='sc-ele'>
                        <ul>
                          <li>Select a Country</li>
                          <li><Link href="#">Australia</Link></li>
                          <li><Link href="#">Austria</Link></li>
                          <li><Link href="#">Bulgaria</Link></li>
                          <li><Link href="#">Canada</Link></li>
                          <li><Link href="#">Cyprus</Link></li>
                          <li><Link href="#">Australia</Link></li>
                          <li><Link href="#">Finland</Link></li>
                        </ul>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>State</Accordion.Header>
                    <Accordion.Body>
                      <div className='sc-ele'>
                        <ul>
                          <li>Select a State</li>
                          <li><Link href="#">Australia</Link></li>
                          <li><Link href="#">Austria</Link></li>
                          <li><Link href="#">Bulgaria</Link></li>
                          <li><Link href="#">Canada</Link></li>
                          <li><Link href="#">Cyprus</Link></li>
                          <li><Link href="#">Australia</Link></li>
                          <li><Link href="#">Finland</Link></li>
                        </ul>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Is PGWP Available?</Accordion.Header>
                    <Accordion.Body>
                      <div className='sc-ele'>
                        <ul>
                          <li>Select PGWP Available</li>
                          <li><Link href="#">Yes</Link></li>
                          <li><Link href="#">No</Link></li>
                        </ul>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Discipline</Accordion.Header>
                    <Accordion.Body>
                      <div className='sc-ele'>
                        <ul>
                          <li>Select Discipline</li>
                          <li><Link href="#">Yes</Link></li>
                          <li><Link href="#">No</Link></li>
                        </ul>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>Program Type</Accordion.Header>
                    <Accordion.Body>
                      <div className='sc-ele'>
                        <ul>
                          <li>Select Program Type</li>
                          <li><Link href="#">Yes</Link></li>
                          <li><Link href="#">No</Link></li>
                        </ul>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>Intake</Accordion.Header>
                    <Accordion.Body>
                      <div className='sc-ele'>
                        <ul>
                          <li>Select Intake</li>
                          <li><Link href="#">Yes</Link></li>
                          <li><Link href="#">No</Link></li>
                        </ul>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          )}
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="programs-content">
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
          </div>
          <div className="col-md-4 mb-4">
            <div className="programs-content">
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
          </div>
          <div className="col-md-4 mb-4">
            <div className="programs-content">
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
          </div>
          <div className="col-md-4 mb-4">
            <div className="programs-content">
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
          </div>
          <div className="col-md-4 mb-4">
            <div className="programs-content">
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
          </div>
          <div className="col-md-4 mb-4">
            <div className="programs-content">
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
          </div>
          <div className="col-md-4 mb-4">
            <div className="programs-content">
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
          </div>
          <div className="col-md-4 mb-4">
            <div className="programs-content">
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
          </div>
          <div className="col-md-4 mb-4">
            <div className="programs-content">
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
          </div>
        </div>
        {/* <ul className="pagination">
          <li><Link href="/" className="prev"></Link></li>
          <li><Link href="/" className="active">1</Link></li>
          <li><Link href="/">2</Link></li>
          <li><Link href="/">3</Link></li>
          <li><Link href="/" className="next"></Link></li>
        </ul> */}
      </div>
      <ProgramsModal
        show={programmeShow}
        onHide={programmeHandleClose}
        programmeModelitems={programmeModelitems}
      />
    </>
  )
}

export default SearchByPrograms;