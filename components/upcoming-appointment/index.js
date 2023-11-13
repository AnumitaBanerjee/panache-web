import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'

const UpcomingAppointment = () => {
  return (
    <>
      <div className="content-panel">
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
            <span>Upcoming Appointments</span>
          </Link>
        </div>
        <div className="upcoming-content">
          <div className="row">
            <div className="col-md-4">
              <div className="upcoming-box">
                <div className="upcoming-box-t">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/date-fill-icon.png`}
                    alt="Panache"
                    width={48}
                    height={44}
                    priority={true}
                  />
                  <div className="upcoming-box-tr">
                    <span>Meeting with Amigo Rana</span>
                    <ul className='upcoming-box-li'>
                      <li><Link href='#'>Today</Link></li>
                      <li>12.30 P.M</li>
                    </ul>
                  </div>
                </div>
                <div className="upcoming-box-b">
                  <Link href='#'>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/tick-icon.svg`}
                      alt="Panache"
                      width={22}
                      height={16}
                      priority={true}
                    /> Yes
                  </Link>
                  <Link href='#'>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/cross-icon.svg`}
                      alt="Panache"
                      width={16}
                      height={16}
                      priority={true}
                    /> Dismiss
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="upcoming-box">
                <div className="upcoming-box-t">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/date-fill-icon.png`}
                    alt="Panache"
                    width={48}
                    height={44}
                    priority={true}
                  />
                  <div className="upcoming-box-tr">
                    <span>Meeting with Amigo Rana</span>
                    <ul className='upcoming-box-li'>
                      <li><Link href='#'>Today</Link></li>
                      <li>12.30 P.M</li>
                    </ul>
                  </div>
                </div>
                <div className="upcoming-box-b">
                  <Link href='#'>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/tick-icon.svg`}
                      alt="Panache"
                      width={22}
                      height={16}
                      priority={true}
                    /> Yes
                  </Link>
                  <Link href='#'>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/cross-icon.svg`}
                      alt="Panache"
                      width={16}
                      height={16}
                      priority={true}
                    /> Dismiss
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="upcoming-box">
                <div className="upcoming-box-t">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/date-fill-icon.png`}
                    alt="Panache"
                    width={48}
                    height={44}
                    priority={true}
                  />
                  <div className="upcoming-box-tr">
                    <span>Meeting with Amigo Rana</span>
                    <ul className='upcoming-box-li'>
                      <li><Link href='#'>Today</Link></li>
                      <li>12.30 P.M</li>
                    </ul>
                  </div>
                </div>
                <div className="upcoming-box-b">
                  <Link href='#'>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/tick-icon.svg`}
                      alt="Panache"
                      width={22}
                      height={16}
                      priority={true}
                    /> Yes
                  </Link>
                  <Link href='#'>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/cross-icon.svg`}
                      alt="Panache"
                      width={16}
                      height={16}
                      priority={true}
                    /> Dismiss
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="upcoming-box">
                <div className="upcoming-box-t">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/date-fill-icon.png`}
                    alt="Panache"
                    width={48}
                    height={44}
                    priority={true}
                  />
                  <div className="upcoming-box-tr">
                    <span>Meeting with Amigo Rana</span>
                    <ul className='upcoming-box-li'>
                      <li><Link href='#'>Today</Link></li>
                      <li>12.30 P.M</li>
                    </ul>
                  </div>
                </div>
                <div className="upcoming-box-b">
                  <Link href='#'>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/tick-icon.svg`}
                      alt="Panache"
                      width={22}
                      height={16}
                      priority={true}
                    /> Yes
                  </Link>
                  <Link href='#'>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/cross-icon.svg`}
                      alt="Panache"
                      width={16}
                      height={16}
                      priority={true}
                    /> Dismiss
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="upcoming-box">
                <div className="upcoming-box-t">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/date-fill-icon.png`}
                    alt="Panache"
                    width={48}
                    height={44}
                    priority={true}
                  />
                  <div className="upcoming-box-tr">
                    <span>Meeting with Amigo Rana</span>
                    <ul className='upcoming-box-li'>
                      <li><Link href='#'>Today</Link></li>
                      <li>12.30 P.M</li>
                    </ul>
                  </div>
                </div>
                <div className="upcoming-box-b">
                  <Link href='#'>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/tick-icon.svg`}
                      alt="Panache"
                      width={22}
                      height={16}
                      priority={true}
                    /> Yes
                  </Link>
                  <Link href='#'>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/cross-icon.svg`}
                      alt="Panache"
                      width={16}
                      height={16}
                      priority={true}
                    /> Dismiss
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="upcoming-box">
                <div className="upcoming-box-t">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/date-fill-icon.png`}
                    alt="Panache"
                    width={48}
                    height={44}
                    priority={true}
                  />
                  <div className="upcoming-box-tr">
                    <span>Meeting with Amigo Rana</span>
                    <ul className='upcoming-box-li'>
                      <li><Link href='#'>30.7.2023</Link></li>
                      <li>12.30 P.M</li>
                    </ul>
                  </div>
                </div>
                <div className="upcoming-box-b">
                  <Link href='#'>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/tick-icon.svg`}
                      alt="Panache"
                      width={22}
                      height={16}
                      priority={true}
                    /> Yes
                  </Link>
                  <Link href='#'>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/cross-icon.svg`}
                      alt="Panache"
                      width={16}
                      height={16}
                      priority={true}
                    /> Dismiss
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="upcoming-box">
                <div className="upcoming-box-t">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/date-fill-icon.png`}
                    alt="Panache"
                    width={48}
                    height={44}
                    priority={true}
                  />
                  <div className="upcoming-box-tr">
                    <span>Meeting with Amigo Rana</span>
                    <ul className='upcoming-box-li'>
                      <li><Link href='#'>Today</Link></li>
                      <li>12.30 P.M</li>
                    </ul>
                  </div>
                </div>
                <div className="upcoming-box-b">
                  <Link href='#'>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/tick-icon.svg`}
                      alt="Panache"
                      width={22}
                      height={16}
                      priority={true}
                    /> Yes
                  </Link>
                  <Link href='#'>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/cross-icon.svg`}
                      alt="Panache"
                      width={16}
                      height={16}
                      priority={true}
                    /> Dismiss
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="upcoming-box">
                <div className="upcoming-box-t">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/date-fill-icon.png`}
                    alt="Panache"
                    width={48}
                    height={44}
                    priority={true}
                  />
                  <div className="upcoming-box-tr">
                    <span>Meeting with Amigo Rana</span>
                    <ul className='upcoming-box-li'>
                      <li><Link href='#'>30.7.2023</Link></li>
                      <li>12.30 P.M</li>
                    </ul>
                  </div>
                </div>
                <div className="upcoming-box-b">
                  <Link href='#'>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/tick-icon.svg`}
                      alt="Panache"
                      width={22}
                      height={16}
                      priority={true}
                    /> Yes
                  </Link>
                  <Link href='#'>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/cross-icon.svg`}
                      alt="Panache"
                      width={16}
                      height={16}
                      priority={true}
                    /> Dismiss
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="upcoming-box">
                <div className="upcoming-box-t">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/date-fill-icon.png`}
                    alt="Panache"
                    width={48}
                    height={44}
                    priority={true}
                  />
                  <div className="upcoming-box-tr">
                    <span>Meeting with Amigo Rana</span>
                    <ul className='upcoming-box-li'>
                      <li><Link href='#'>24.7.2023</Link></li>
                      <li>12.30 P.M</li>
                    </ul>
                  </div>
                </div>
                <div className="upcoming-box-b">
                  <Link href='#'>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/tick-icon.svg`}
                      alt="Panache"
                      width={22}
                      height={16}
                      priority={true}
                    /> Yes
                  </Link>
                  <Link href='#'>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/cross-icon.svg`}
                      alt="Panache"
                      width={16}
                      height={16}
                      priority={true}
                    /> Dismiss
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default UpcomingAppointment;