import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Notifications = () => {
  return (
    <>
      <div className="content-panel">
        <div className='noti-main'>
          <div className='noti-top'>
            <h2>Notifications</h2>
            <Link href="#">Clear All</Link>
          </div>
          <div className='noti-mid'>
            <div className='noti-sin active'>
                <p>Dale Houstan & John Deen sent you a messages.</p>
                <span>16.56</span>
            </div>
            <div className='noti-sin'>
                <p>Jesse, Anna & 3 Others are around you right now!</p>
                <span>Thu</span>
            </div>
            <div className='noti-sin active'>
                <p>Hey John! Don’t forget to check whose around with you</p>
                <span>Wed</span>
            </div>
            <div className='noti-sin'>
                <p>Katherine JD & Soe Sean sent you a messages.</p>
                <span>Thu</span>
            </div>
            <div className='noti-sin'>
                <p>Jesse, Anna & 3 Others are around you right now!</p>
                <span>Wed</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Notifications;