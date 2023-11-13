import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TrackCommissions = () => {
  return (
    <>
      <div className="content-panel">
        <div className='commission-pane-main'>
          <div className='commission-track'>
            <h2>Track Commissions</h2>
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
                            $90
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

export default TrackCommissions;