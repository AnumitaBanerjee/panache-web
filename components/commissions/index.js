import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Commissions = () => {
  return (
    <>
      <div className="content-panel">
        <div className='commission-pane-main'>
          <div className='commission-calculate mb-4'>
            <div className="apply-list-pane-top">
              <h2>Calculate Commissions</h2>
            </div>
            <div className='commission-pane'>
              <div className='row'>
                <div className='col-md-6 mb-2'>
                  <div className="form-floating">
                    <select className="form-select" id="Student" aria-label="Floating label select example">
                      <option selected>Olivia Jason</option>
                      <option value="1">Two</option>
                    </select>
                    <label htmlFor="Student">Name Of Student</label>
                  </div>
                </div>
                <div className='col-md-6 mb-2'>
                  <div className="form-floating">
                    <select className="form-select" id="Applied" aria-label="Floating label select example">
                      <option selected>Donec ornare purus</option>
                      <option value="1">Two</option>
                    </select>
                    <label htmlFor="Applied">Program Applied</label>
                  </div>
                </div>
                <div className='col-md-6 mb-2'>
                  <div className="form-floating">
                    <select className="form-select" id="University" aria-label="Floating label select example">
                      <option selected>Acadia University</option>
                      <option value="1">Two</option>
                    </select>
                    <label htmlFor="University">University</label>
                  </div>
                </div>
                <div className='col-md-6 mb-2'>
                  <div className="form-floating">
                    <select className="form-select" id="Country" aria-label="Floating label select example">
                      <option selected>USA</option>
                      <option value="1">Two</option>
                    </select>
                    <label htmlFor="Country">Country</label>
                  </div>
                </div>
              </div>
              <div className="submit-area text-center">
                <button className="btn btn-blue btn-big" >Calculate</button>
              </div>
            </div>
          </div>
          <div className='commission-track'>
            <div className="apply-list-pane-top">
              <h2>Track Commissions</h2>
              <Link href='/track-commissions'>See All</Link>
            </div>
            <div className='commission-track-pane'>
              <div className='row'>
                <div className='col-md-4 mb-4'>
                  <div className="track-pane">
                    <div className="track-pane-t">
                      <div className="track-pane-proifle">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/user-1.jpg`}
                          alt="Panache"
                          width={41}
                          height={41}
                          priority={true}
                        />
                      </div>
                      <div className="track-pane-con">
                        <div className="track-pane-con-1">
                          <span>Olivia Jason</span>
                          <p className='m-0'>Commission Earned</p>
                        </div>
                        <div className="track-pane-con-2">
                          <div className='des'>
                            <ul>
                              <li> <Image
                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/university-icon.png`}
                                alt="Panache"
                                width={16}
                                height={16}
                                priority={true}
                              /> Graduate</li>
                              <li> <Image
                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-icon.png`}
                                alt="Panache"
                                width={22}
                                height={16}
                                priority={true}
                              /> Acadia University</li>
                            </ul>
                          </div>
                          <div className='price'>
                            $80
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="track-pane-b">
                      <Link href='#'>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/generate-report-icon.png`}
                          alt="Panache"
                          width={12}
                          height={16}
                          priority={true}
                        /> Generate Report
                      </Link>
                      <Link href='#'>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/add-payout-icon.png`}
                          alt="Panache"
                          width={18}
                          height={14}
                          priority={true}
                        /> Add To Payout
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 mb-4'>
                  <div className="track-pane">
                    <div className="track-pane-t">
                      <div className="track-pane-proifle">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/user-1.jpg`}
                          alt="Panache"
                          width={41}
                          height={41}
                          priority={true}
                        />
                      </div>
                      <div className="track-pane-con">
                        <div className="track-pane-con-1">
                          <span>Olivia Jason</span>
                          <p className='m-0'>Commission Earned</p>
                        </div>
                        <div className="track-pane-con-2">
                          <div className='des'>
                            <ul>
                              <li> <Image
                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/university-icon.png`}
                                alt="Panache"
                                width={16}
                                height={16}
                                priority={true}
                              /> Graduate</li>
                              <li> <Image
                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-icon.png`}
                                alt="Panache"
                                width={22}
                                height={16}
                                priority={true}
                              /> Acadia University</li>
                            </ul>
                          </div>
                          <div className='price'>
                            $80
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="track-pane-b">
                      <Link href='#'>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/generate-report-icon.png`}
                          alt="Panache"
                          width={12}
                          height={16}
                          priority={true}
                        /> Generate Report
                      </Link>
                      <Link href='#'>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/add-payout-icon.png`}
                          alt="Panache"
                          width={18}
                          height={14}
                          priority={true}
                        /> Add To Payout
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 mb-4'>
                  <div className="track-pane">
                    <div className="track-pane-t">
                      <div className="track-pane-proifle">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/user-1.jpg`}
                          alt="Panache"
                          width={41}
                          height={41}
                          priority={true}
                        />
                      </div>
                      <div className="track-pane-con">
                        <div className="track-pane-con-1">
                          <span>Melissa Reilly</span>
                          <p className='m-0'>Commission Earned</p>
                        </div>
                        <div className="track-pane-con-2">
                          <div className='des'>
                            <ul>
                              <li> <Image
                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/university-icon.png`}
                                alt="Panache"
                                width={16}
                                height={16}
                                priority={true}
                              /> Graduate</li>
                              <li> <Image
                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-icon.png`}
                                alt="Panache"
                                width={22}
                                height={16}
                                priority={true}
                              /> Acadia University</li>
                            </ul>
                          </div>
                          <div className='price'>
                            $60
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="track-pane-b">
                      <Link href='#'>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/generate-report-icon.png`}
                          alt="Panache"
                          width={12}
                          height={16}
                          priority={true}
                        /> Generate Report
                      </Link>
                      <Link href='#'>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/add-payout-icon.png`}
                          alt="Panache"
                          width={18}
                          height={14}
                          priority={true}
                        /> Add To Payout
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className="track-pane">
                    <div className="track-pane-t">
                      <div className="track-pane-proifle">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/user-1.jpg`}
                          alt="Panache"
                          width={41}
                          height={41}
                          priority={true}
                        />
                      </div>
                      <div className="track-pane-con">
                        <div className="track-pane-con-1">
                          <span>Virgil Romaguera</span>
                          <p className='m-0'>Commission Earned</p>
                        </div>
                        <div className="track-pane-con-2">
                          <div className='des'>
                            <ul>
                              <li> <Image
                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/university-icon.png`}
                                alt="Panache"
                                width={16}
                                height={16}
                                priority={true}
                              /> Graduate</li>
                              <li> <Image
                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-icon.png`}
                                alt="Panache"
                                width={22}
                                height={16}
                                priority={true}
                              /> Acadia University</li>
                            </ul>
                          </div>
                          <div className='price'>
                            $50
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="track-pane-b">
                      <Link href='#'>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/generate-report-icon.png`}
                          alt="Panache"
                          width={12}
                          height={16}
                          priority={true}
                        /> Generate Report
                      </Link>
                      <Link href='#'>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/add-payout-icon.png`}
                          alt="Panache"
                          width={18}
                          height={14}
                          priority={true}
                        /> Add To Payout
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className="track-pane">
                    <div className="track-pane-t">
                      <div className="track-pane-proifle">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/user-1.jpg`}
                          alt="Panache"
                          width={41}
                          height={41}
                          priority={true}
                        />
                      </div>
                      <div className="track-pane-con">
                        <div className="track-pane-con-1">
                          <span>Virgil Romaguera</span>
                          <p className='m-0'>Commission Earned</p>
                        </div>
                        <div className="track-pane-con-2">
                          <div className='des'>
                            <ul>
                              <li> <Image
                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/university-icon.png`}
                                alt="Panache"
                                width={16}
                                height={16}
                                priority={true}
                              /> Graduate</li>
                              <li> <Image
                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-icon.png`}
                                alt="Panache"
                                width={22}
                                height={16}
                                priority={true}
                              /> Acadia University</li>
                            </ul>
                          </div>
                          <div className='price'>
                            $70
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="track-pane-b">
                      <Link href='#'>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/generate-report-icon.png`}
                          alt="Panache"
                          width={12}
                          height={16}
                          priority={true}
                        /> Generate Report
                      </Link>
                      <Link href='#'>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/add-payout-icon.png`}
                          alt="Panache"
                          width={18}
                          height={14}
                          priority={true}
                        /> Add To Payout
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className="track-pane">
                    <div className="track-pane-t">
                      <div className="track-pane-proifle">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/user-1.jpg`}
                          alt="Panache"
                          width={41}
                          height={41}
                          priority={true}
                        />
                      </div>
                      <div className="track-pane-con">
                        <div className="track-pane-con-1">
                          <span>Melissa Reilly</span>
                          <p className='m-0'>Commission Earned</p>
                        </div>
                        <div className="track-pane-con-2">
                          <div className='des'>
                            <ul>
                              <li> <Image
                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/university-icon.png`}
                                alt="Panache"
                                width={16}
                                height={16}
                                priority={true}
                              /> Graduate</li>
                              <li> <Image
                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/degree-icon.png`}
                                alt="Panache"
                                width={22}
                                height={16}
                                priority={true}
                              /> Acadia University</li>
                            </ul>
                          </div>
                          <div className='price'>
                            $55
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="track-pane-b">
                      <Link href='#'>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/generate-report-icon.png`}
                          alt="Panache"
                          width={12}
                          height={16}
                          priority={true}
                        /> Generate Report
                      </Link>
                      <Link href='#'>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/add-payout-icon.png`}
                          alt="Panache"
                          width={18}
                          height={14}
                          priority={true}
                        /> Add To Payout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Commissions;