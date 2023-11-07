import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useRouter } from 'next/router'

const ChooseMethods = () => {

  const router = useRouter()

  return (
    <>
      <div className="content-panel">

        <div className="header-w-back">
          <Link href="" className="back-btn" onClick={() => router.back()}>
            <figure>
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/back-icon.png`}
                alt="Panache"
                width={6}
                height={12}
                priority={true}
              />
            </figure>
            <span>Choose Methods</span>
          </Link>
        </div>

        <div className="acc-settings-pane">

          <div className="methods-tab">
            <Tabs>
              <TabList>
                <Tab>
                  <figure>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/net-banking.svg`}
                      alt="Panache"
                      width={42}
                      height={42}
                      priority={true}
                    />
                  </figure>
                  <span>Net banking</span>
                </Tab>
                <Tab>
                  <figure>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/credit-card.svg`}
                      alt="Panache"
                      width={44}
                      height={33}
                      priority={true}
                    />
                  </figure>
                  <span>Credit/Debit cards</span>
                </Tab>
                <Tab>
                  <figure>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/credit-card.svg`}
                      alt="Panache"
                      width={44}
                      height={33}
                      priority={true}
                    />
                  </figure>
                  <span>Saved cards</span>
                </Tab>
              </TabList>
              <TabPanel>
                <div className='tab_content_area'>
                  <h2>Select Bank</h2>
                  <ul className='select-bank'>
                    <li>
                      <input type="radio" id="bankradio1" name="fav_Bank" />
                      <label htmlFor="bankradio1">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/bacnk-icon.png`}
                          alt="Panache"
                          width={20}
                          height={20}
                          priority={true}
                        />
                        <span>Deutche Bank</span>
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="bankradio2" name="fav_Bank" />
                      <label htmlFor="bankradio2">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/bacnk-icon.png`}
                          alt="Panache"
                          width={20}
                          height={20}
                          priority={true}
                        />
                        <span>Swiss Bank</span>
                      </label>
                    </li> <li>
                      <input type="radio" id="bankradio3" name="fav_Bank" />
                      <label htmlFor="bankradio3">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/bacnk-icon.png`}
                          alt="Panache"
                          width={20}
                          height={20}
                          priority={true}
                        />
                        <span>Lorem Ipsum Bank</span>
                      </label>
                    </li> <li>
                      <input type="radio" id="bankradio4" name="fav_Bank" />
                      <label htmlFor="bankradio4">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/bacnk-icon.png`}
                          alt="Panache"
                          width={20}
                          height={20}
                          priority={true}
                        />
                        <span>Deutche Bank</span>
                      </label>
                    </li> <li>
                      <input type="radio" id="bankradio5" name="fav_Bank" />
                      <label htmlFor="bankradio5">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/bacnk-icon.png`}
                          alt="Panache"
                          width={20}
                          height={20}
                          priority={true}
                        />
                        <span>Deutche Bank</span>
                      </label>
                    </li> <li>
                      <input type="radio" id="bankradio6" name="fav_Bank" />
                      <label htmlFor="bankradio6">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/bacnk-icon.png`}
                          alt="Panache"
                          width={20}
                          height={20}
                          priority={true}
                        />
                        <span>Lorem Ipsum Bank</span>
                      </label>
                    </li>

                  </ul>
                </div>
              </TabPanel>
              <TabPanel>
                <div className='tab_content_area select-tab-bank'>
                  <h2>Select Bank</h2>
                  <div className='add-cards'>
                    <div className='add-cards-list'>
                      <Link href="#" className='active'>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/master-icon.jpg`}
                          alt="Panache"
                          width={80}
                          height={42}
                          priority={true}
                        />
                      </Link>
                      <Link href="#">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/visa-icon.jpg`}
                          alt="Panache"
                          width={80}
                          height={42}
                          priority={true}
                        />
                      </Link>
                      <Link href="#">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/american-icon.jpg`}
                          alt="Panache"
                          width={80}
                          height={42}
                          priority={true}
                        />
                      </Link>
                      <Link href="#">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/discover-icon.jpg`}
                          alt="Panache"
                          width={80}
                          height={42}
                          priority={true}
                        />
                      </Link>
                    </div>
                    <div className='add-cards-form'>
                      <form>
                        <div className="form-floating mb-3">
                          <input type="text" placeholder="John Doe" className="form-control" id="cardhInput" value="John Doe" />
                          <label htmlFor="cardhInput">Cardholder Name</label>
                          <span className="input-icon">
                            <Image
                              src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/name-icon.png`}
                              alt="Panache"
                              width={14}
                              height={18}
                              priority={true}
                            />
                          </span>
                        </div>

                        <div className='row mb-3'>
                          <div className='col-md-6'>
                            <div className="form-floating">
                              <input type="text" placeholder="5986 6547 6325 9658" className="form-control" id="numberInput" value="5986 6547 6325 9658" />
                              <label htmlFor="numberInput">Card Number</label>
                              <span className="input-icon">
                                <Image
                                  src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/cardnumber-icon.png`}
                                  alt="Panache"
                                  width={18}
                                  height={14}
                                  priority={true}
                                />
                              </span>
                            </div>
                          </div>
                          <div className='col-md-6 form-flex'>
                            <div className="form-floating">
                              <input type="text" placeholder="12/06" className="form-control" id="expiryngInput" value="12/06" />
                              <label htmlFor="expiryngInput">Expiry</label>
                              <span className="input-icon">
                                <Image
                                  src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/expiry-icon.png`}
                                  alt="Panache"
                                  width={18}
                                  height={18}
                                  priority={true}
                                />
                              </span>
                            </div>
                            <div className="form-floating form-floating-last">
                              <input type="passrowd" placeholder="***" className="form-control" id="cvvInput" value="***" />
                              <label htmlFor="cvvInput">CVV</label>
                            </div>
                          </div>
                        </div>
                      </form>
                      <div className='save-card'>
                        <input type="radio" id="test2" name="radio-group" />
                        <label htmlFor="test2">Save card for future payments</label>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className='tab_content_area'>
                  <h2>Select Bank</h2>
                  <ul className='select-bank select-card'>
                    <li>
                      <input type="radio" id="bankradio1" name="fav_Bank" />
                      <label htmlFor="bankradio1">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/master-icon.jpg`}
                          alt="Panache"
                          width={80}
                          height={42}
                          priority={true}
                        />
                        <span>Deutche Bank <i>****4569</i></span>
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="bankradio2" name="fav_Bank" />
                      <label htmlFor="bankradio2">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/visa-icon.jpg`}
                          alt="Panache"
                          width={80}
                          height={42}
                          priority={true}
                        />
                        <span>Swiss Bank <i>****7821</i></span>
                      </label>
                    </li>
                  </ul>
                </div>
              </TabPanel>
            </Tabs>
          </div>

          <p className="amnt-pane">Total Amount: <span>$5059</span></p>
          <div className="proceed-btn-pane">
            <button onClick={() => router.push('/checkout/congratulations')}
              className="pay-btn"
              type="submit">PROCEED TO PAY
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChooseMethods;