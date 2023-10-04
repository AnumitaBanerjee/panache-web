import React from 'react';
import Image from 'next/image';

const AccountSettings = () => {
  return (
    <>
      <div className="content-panel">
        <div className="acc-settings-pane">
          {/* <button
            className="back-btn"
            type="button"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/back-icon.png`}
              alt="Panache"
              width={6.15}
              height={12}
              priority={true}
            />
          </button><span className="chckout-pane">Checkout page</span> */}

          {/* <div className="row mt-5">
            <div className="col-md-8 offset-md-2">
              <div className="checkout-box-panel">
                <div className="checkout-box">
                  <div className="checkout-header d-flex">
                    <p>APPLICATION 2</p>
                    <p>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/approve-icon.png`}
                        alt="Panache"
                        width={16}
                        height={16}
                        priority={true}
                      />
                      <span>APPROVED</span>
                    </p>
                  </div>
                  <h4>PhD HRM and Organisation Studies</h4>
                  <h5>University of Essex (UK)</h5>
                  <div class="fee-panel">
                    <ul>
                      <li>Application Fee<span>$5059</span></li>
                      <li>Tutio Fee<span>$50</span></li>
                    </ul>
                  </div>
                  <button className="added-btn" type="button">+ ADDED</button>
                </div>

                <div className="checkout-box">
                  <div className="checkout-header d-flex">
                    <p>APPLICATION 2</p>
                    <p>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/approve-icon.png`}
                        alt="Panache"
                        width={16}
                        height={16}
                        priority={true}
                      />
                      <span>APPROVED</span>
                    </p>
                  </div>
                  <h4>B.F.A. in Art Practices</h4>
                  <h5>University of Wolverhampton (UK)</h5>
                  <div class="fee-panel">
                    <ul>
                      <li>Application Fee<span>$5059</span></li>
                      <li>Tutio Fee<span>$50</span></li>
                    </ul>
                  </div>
                  <button className="added-btn payment" type="button">+ ADD TO PAYMENT</button>
                </div>
              </div>
            </div>
          </div> */}

          <button
            className="back-btn"
            type="button"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/back-icon.png`}
              alt="Panache"
              width={6.15}
              height={12}
              priority={true}
            />
          </button><span className="chckout-pane">Choose methods</span>

          <div className="row">
            <div className="col-md-2 offset-md-2">
              <div className="choose-method-box">
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/net-banking-icon.png`}
                  alt="Panache"
                  width={42}
                  height={42}
                  priority={true}
                />
              </div>
            </div>
            <div className="col-md-2">
              <div className="choose-method-box">
              <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/credit-card-icon.png`}
                  alt="Panache"
                  width={42}
                  height={42}
                  priority={true}
                />
              </div>
            </div>
            <div className="col-md-2">
              <div className="choose-method-box">
              <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/credit-card-icon.png`}
                  alt="Panache"
                  width={42}
                  height={42}
                  priority={true}
                />
              </div>
            </div>
          </div>

          <p className="amnt-pane">Total Amount: <span>$5059</span></p>
          <div className="proceed-btn-pane">
            <button
              className="pay-btn"
              type="submit">PROCEED TO PAY
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AccountSettings;