import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AccountHeader = () => {
  return (
    <>
      <div className='account-top'>
        <div className="profile-image">
          <figure>
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/advisors-1.jpg`}
              alt="Panache"
              width={63}
              height={63}
              priority={true}
            />
          </figure>
          <div className='con'>
            <div className='con-t'>
              <h2>John Doe</h2>
              <span className='student'>Student ID: 25698745</span>
            </div>
            <div className='con-b'>
              <ul>
                <li><Link href="mailto:Johndoe23@gmail.com">Johndoe23@gmail.com</Link></li>
                <li><Link href="tel:0987654321">0987654321</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AccountHeader;