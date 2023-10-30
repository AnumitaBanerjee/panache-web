import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Accordion from 'react-bootstrap/Accordion';

const SearchByUniversity = () => {

  const [toggle, setToggle] = useState(false)

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
              <span>Search by University</span>
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
            <div className="university-content">
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
          </div>
          <div className="col-md-4 mb-4">
            <div className="university-content">
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
          </div><div className="col-md-4 mb-4">
            <div className="university-content">
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
          </div><div className="col-md-4 mb-4">
            <div className="university-content">
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
          </div><div className="col-md-4 mb-4">
            <div className="university-content">
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
          </div><div className="col-md-4 mb-4">
            <div className="university-content">
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
          </div><div className="col-md-4 mb-4">
            <div className="university-content">
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
          </div><div className="col-md-4 mb-4">
            <div className="university-content">
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
          </div><div className="col-md-4 mb-4">
            <div className="university-content">
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
          </div>
        </div>
        {/* <ul className="pagination">
          <li><Link href="/" className="prev"></Link></li>
          <li><Link href="/" className="active">1</Link></li>
          <li><Link href="/">2</Link></li>
          <li><Link href="/">3</Link></li>
          <li><Link href="/" className="next"></Link></li>
        </ul> */}
      </div >
    </>
  )
}

export default SearchByUniversity;