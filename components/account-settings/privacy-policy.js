import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AccountHeaderPage from '../../components/account-settings/account-header'

const PrivacyPolicy = () => {
  return (
    <>
      <div className="content-panel">

        <AccountHeaderPage />

        <div className='account-btm'>
          <div className='account-list account-back'>
            <Link href="/account-settings/" className='main-link'>
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/change-profile-picture-icon.png`}
                alt="Panache"
                width={18}
                height={18}
                priority={true}
              />
              <span>Privacy Policy</span>
            </Link>
          </div>
          <div className='account-btm-con'>
            <h3>Privacy Policy</h3>
            <p>Content Coming Soon</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy;