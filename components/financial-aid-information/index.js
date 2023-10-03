import React from 'react';
import Image from 'next/image';

const FinancialAidInformation = () => {
  return (
    <>
      <div className="content-panel">
        <div className="financial-aid-pane-top">
          <h2>Financial Aid Programs</h2>
        </div>
        <div className="financial-content">
          <div className="program-application-status">
            <h2>Program Application Status</h2>
            <div className="pending-pane">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/approve-icon.png`}
                alt="Panache"
                width={15.99}
                height={16}
                priority={true}
              />
              <p>Etiam ultricies, est nec egestas</p>
            </div>
            <div className="approve-pane">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/alert-icon.png`}
                alt="Panache"
                width={15.99}
                height={14}
                priority={true}
              />
              <p>Etiam ultricies, est nec egestas</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="financial-aid-box">
                <div className="financial-box-t">
                  <div className="financial-box-t-l">
                    <div className="degree-pane">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-icon.png`}
                        alt="Panache"
                        width={29}
                        height={21}
                        priority={true}
                      />
                      <p>BSc in Applied<br />Data Science</p>
                      <button className="apply-btn" type="button">APPLY</button>
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
                  <h5>RESOLVE</h5>
                </div>
                <span>Pellentesque sit amet tellus dolor.</span>
              </div>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FinancialAidInformation;