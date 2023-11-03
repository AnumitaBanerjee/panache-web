import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import ProgramsModal from "../modal/ProgramsModal";

const University = () => {

  const [programmeShow, setProgrammeShow] = useState(false);
  const [programmeModelitems, setProgrammeModeldata] = useState([]);

  const programmeHandleClose = () => setProgrammeShow(false);
  const programmeOpenModal = (e) => {
    setProgrammeShow(true);
  }


  return (
    <>
      <div className="content-panel">
        <div className="university-pane">
          <div className="university-pane-top">
            <figure>
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/university-iocn.svg`}
                alt="Panache"
                width={65}
                height={60}
                priority={true}
              />
            </figure>
            <div className='ccon'>
              <h2>Acadia University</h2>
              <ul>
                <li className='city'>Canada</li>
                <li className='campus'>Wolfville Campus</li>
              </ul>
            </div>

          </div>
          <div className="university-pane-mid mb-4 mt-4">
            <p>Donec mollis sapien leo, et pharetra dolor cursus a. Ut malesuada sagittis dui, nec imperdiet ante facilisis sit amet. Proin nunc dolor, faucibus eu sem a, aliquet mattis ipsum. Donec mollis sapien leo, et pharetra dolor cursus a. Ut malesuada sagittis dui, nec imperdiet ante facilisis sit amet. Proin nunc dolor, faucibus eu sem a, aliquet mattis ipsum.  Donec mollis sapien leo, et pharetra dolor cursus a. Ut malesuada sagittis dui,</p>
          </div>
          <div className="university-pane-btm">
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
            </div>
          </div>
        </div>
      </div>
      <ProgramsModal
        show={programmeShow}
        onHide={programmeHandleClose}
        programmeModelitems={programmeModelitems}
      />
    </>
  )
}

export default University;