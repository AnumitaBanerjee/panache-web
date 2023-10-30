import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FinancialAid = () => {
  return (
    <>
      <div className="content-panel">
        <div className="financial-content">
          <div className="headin-area">
            <h2>Financial Aid Programs</h2>
            {/* <Link href='/'>SEE ALL</Link> */}
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="financial-aid-box">
                <div className="financial-box-t-l">
                  <div className="degree-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-icon.png`}
                      alt="Panache"
                      width={29}
                      height={21}
                      priority={true}
                    />
                    <p>Adam Smith Fellowship</p>
                  </div>
                  <p>Ut vitae sapien sed odio tincidunt  set tincidunt. Nullam non est suscipit, ut dolor</p>
                  <div className="country-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/globe-icon.png`}
                      alt="Panache"
                      width={14}
                      height={14}
                      priority={true}
                    />
                    <label>Country: <span>Canada</span></label>
                  </div>
                  <div className="degree-or-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-orange-icon.png`}
                      alt="Panache"
                      width={14}
                      height={14}
                      priority={true}
                    />
                    <label>Eligible Programs: <span>M.Phil., or Ph.D</span></label>
                  </div>
                </div>
                <div className="financial-box-footer">
                  <button className="apply-btn" type="button">APPLY</button>
                  <button className="brochure-btn">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/pdf-icon.png`}
                      alt="Panache"
                      width={11.01}
                      height={14.16}
                      priority={true}
                    />
                    <span>DOWNLOAD BROCHURE</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="financial-aid-box">
                <div className="financial-box-t-l">
                  <div className="degree-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-icon.png`}
                      alt="Panache"
                      width={29}
                      height={21}
                      priority={true}
                    />
                    <p>Adam Smith Fellowship</p>
                  </div>
                  <p>Ut vitae sapien sed odio tincidunt  set tincidunt. Nullam non est suscipit, ut dolor</p>
                  <div className="country-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/globe-icon.png`}
                      alt="Panache"
                      width={14}
                      height={14}
                      priority={true}
                    />
                    <label>Country: <span>Canada</span></label>
                  </div>
                  <div className="degree-or-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-orange-icon.png`}
                      alt="Panache"
                      width={14}
                      height={14}
                      priority={true}
                    />
                    <label>Eligible Programs: <span>M.Phil., or Ph.D</span></label>
                  </div>
                </div>
                <div className="financial-box-footer">
                  <button className="apply-btn" type="button">APPLY</button>
                  <button className="brochure-btn">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/pdf-icon.png`}
                      alt="Panache"
                      width={11.01}
                      height={14.16}
                      priority={true}
                    />
                    <span>DOWNLOAD BROCHURE</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="financial-aid-box">
                <div className="financial-box-t-l">
                  <div className="degree-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-icon.png`}
                      alt="Panache"
                      width={29}
                      height={21}
                      priority={true}
                    />
                    <p>Adam Smith Fellowship</p>
                  </div>
                  <p>Ut vitae sapien sed odio tincidunt  set tincidunt. Nullam non est suscipit, ut dolor</p>
                  <div className="country-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/globe-icon.png`}
                      alt="Panache"
                      width={14}
                      height={14}
                      priority={true}
                    />
                    <label>Country: <span>Canada</span></label>
                  </div>
                  <div className="degree-or-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-orange-icon.png`}
                      alt="Panache"
                      width={14}
                      height={14}
                      priority={true}
                    />
                    <label>Eligible Programs: <span>M.Phil., or Ph.D</span></label>
                  </div>
                </div>
                <div className="financial-box-footer">
                  <button className="apply-btn" type="button">APPLY</button>
                  <button className="brochure-btn">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/pdf-icon.png`}
                      alt="Panache"
                      width={11.01}
                      height={14.16}
                      priority={true}
                    />
                    <span>DOWNLOAD BROCHURE</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="financial-aid-box">
                <div className="financial-box-t-l">
                  <div className="degree-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-icon.png`}
                      alt="Panache"
                      width={29}
                      height={21}
                      priority={true}
                    />
                    <p>Adam Smith Fellowship</p>
                  </div>
                  <p>Ut vitae sapien sed odio tincidunt  set tincidunt. Nullam non est suscipit, ut dolor</p>
                  <div className="country-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/globe-icon.png`}
                      alt="Panache"
                      width={14}
                      height={14}
                      priority={true}
                    />
                    <label>Country: <span>Canada</span></label>
                  </div>
                  <div className="degree-or-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-orange-icon.png`}
                      alt="Panache"
                      width={14}
                      height={14}
                      priority={true}
                    />
                    <label>Eligible Programs: <span>M.Phil., or Ph.D</span></label>
                  </div>
                </div>
                <div className="financial-box-footer">
                  <button className="apply-btn" type="button">APPLY</button>
                  <button className="brochure-btn">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/pdf-icon.png`}
                      alt="Panache"
                      width={11.01}
                      height={14.16}
                      priority={true}
                    />
                    <span>DOWNLOAD BROCHURE</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="financial-aid-box">
                <div className="financial-box-t-l">
                  <div className="degree-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-icon.png`}
                      alt="Panache"
                      width={29}
                      height={21}
                      priority={true}
                    />
                    <p>Adam Smith Fellowship</p>
                  </div>
                  <p>Ut vitae sapien sed odio tincidunt  set tincidunt. Nullam non est suscipit, ut dolor</p>
                  <div className="country-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/globe-icon.png`}
                      alt="Panache"
                      width={14}
                      height={14}
                      priority={true}
                    />
                    <label>Country: <span>Canada</span></label>
                  </div>
                  <div className="degree-or-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-orange-icon.png`}
                      alt="Panache"
                      width={14}
                      height={14}
                      priority={true}
                    />
                    <label>Eligible Programs: <span>M.Phil., or Ph.D</span></label>
                  </div>
                </div>
                <div className="financial-box-footer">
                  <button className="apply-btn" type="button">APPLY</button>
                  <button className="brochure-btn">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/pdf-icon.png`}
                      alt="Panache"
                      width={11.01}
                      height={14.16}
                      priority={true}
                    />
                    <span>DOWNLOAD BROCHURE</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="financial-aid-box">
                <div className="financial-box-t-l">
                  <div className="degree-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-icon.png`}
                      alt="Panache"
                      width={29}
                      height={21}
                      priority={true}
                    />
                    <p>Adam Smith Fellowship</p>
                  </div>
                  <p>Ut vitae sapien sed odio tincidunt  set tincidunt. Nullam non est suscipit, ut dolor</p>
                  <div className="country-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/globe-icon.png`}
                      alt="Panache"
                      width={14}
                      height={14}
                      priority={true}
                    />
                    <label>Country: <span>Canada</span></label>
                  </div>
                  <div className="degree-or-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-orange-icon.png`}
                      alt="Panache"
                      width={14}
                      height={14}
                      priority={true}
                    />
                    <label>Eligible Programs: <span>M.Phil., or Ph.D</span></label>
                  </div>
                </div>
                <div className="financial-box-footer">
                  <button className="apply-btn" type="button">APPLY</button>
                  <button className="brochure-btn">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/pdf-icon.png`}
                      alt="Panache"
                      width={11.01}
                      height={14.16}
                      priority={true}
                    />
                    <span>DOWNLOAD BROCHURE</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="financial-aid-box">
                <div className="financial-box-t-l">
                  <div className="degree-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-icon.png`}
                      alt="Panache"
                      width={29}
                      height={21}
                      priority={true}
                    />
                    <p>Adam Smith Fellowship</p>
                  </div>
                  <p>Ut vitae sapien sed odio tincidunt  set tincidunt. Nullam non est suscipit, ut dolor</p>
                  <div className="country-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/globe-icon.png`}
                      alt="Panache"
                      width={14}
                      height={14}
                      priority={true}
                    />
                    <label>Country: <span>Canada</span></label>
                  </div>
                  <div className="degree-or-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-orange-icon.png`}
                      alt="Panache"
                      width={14}
                      height={14}
                      priority={true}
                    />
                    <label>Eligible Programs: <span>M.Phil., or Ph.D</span></label>
                  </div>
                </div>
                <div className="financial-box-footer">
                  <button className="apply-btn" type="button">APPLY</button>
                  <button className="brochure-btn">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/pdf-icon.png`}
                      alt="Panache"
                      width={11.01}
                      height={14.16}
                      priority={true}
                    />
                    <span>DOWNLOAD BROCHURE</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="financial-aid-box">
                <div className="financial-box-t-l">
                  <div className="degree-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-icon.png`}
                      alt="Panache"
                      width={29}
                      height={21}
                      priority={true}
                    />
                    <p>Adam Smith Fellowship</p>
                  </div>
                  <p>Ut vitae sapien sed odio tincidunt  set tincidunt. Nullam non est suscipit, ut dolor</p>
                  <div className="country-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/globe-icon.png`}
                      alt="Panache"
                      width={14}
                      height={14}
                      priority={true}
                    />
                    <label>Country: <span>Canada</span></label>
                  </div>
                  <div className="degree-or-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-orange-icon.png`}
                      alt="Panache"
                      width={14}
                      height={14}
                      priority={true}
                    />
                    <label>Eligible Programs: <span>M.Phil., or Ph.D</span></label>
                  </div>
                </div>
                <div className="financial-box-footer">
                  <button className="apply-btn" type="button">APPLY</button>
                  <button className="brochure-btn">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/pdf-icon.png`}
                      alt="Panache"
                      width={11.01}
                      height={14.16}
                      priority={true}
                    />
                    <span>DOWNLOAD BROCHURE</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="financial-aid-box">
                <div className="financial-box-t-l">
                  <div className="degree-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-icon.png`}
                      alt="Panache"
                      width={29}
                      height={21}
                      priority={true}
                    />
                    <p>Adam Smith Fellowship</p>
                  </div>
                  <p>Ut vitae sapien sed odio tincidunt  set tincidunt. Nullam non est suscipit, ut dolor</p>
                  <div className="country-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/globe-icon.png`}
                      alt="Panache"
                      width={14}
                      height={14}
                      priority={true}
                    />
                    <label>Country: <span>Canada</span></label>
                  </div>
                  <div className="degree-or-pane">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-orange-icon.png`}
                      alt="Panache"
                      width={14}
                      height={14}
                      priority={true}
                    />
                    <label>Eligible Programs: <span>M.Phil., or Ph.D</span></label>
                  </div>
                </div>
                <div className="financial-box-footer">
                  <button className="apply-btn" type="button">APPLY</button>
                  <button className="brochure-btn">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/pdf-icon.png`}
                      alt="Panache"
                      width={11.01}
                      height={14.16}
                      priority={true}
                    />
                    <span>DOWNLOAD BROCHURE</span>
                  </button>
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
      </div>
    </>
  )
}

export default FinancialAid;