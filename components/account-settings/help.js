import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AccountHeaderPage from '../../components/account-settings/account-header'

const Help = () => {
  return (
    <>
      <div className="content-panel">

        <AccountHeaderPage />

        <div className='account-btm'>
          <div className='account-list account-back'>
          <Link href="/account-settings/" className='main-link'>
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/help-icon.png`}
                alt="Panache"
                width={18}
                height={18}
                priority={true}
              />
              <span>Help</span>
            </Link>
          </div>
          <div className='account-list'>
            <Link href="/account-settings/upload-documents">Terms of Use</Link>
          </div>
          <div className='account-list'>
            <Link href="/account-settings/account-settings">Privacy Policy</Link>
          </div>
          <div className='account-list'>
            <Link href="/account-settings/account-settings">Share the App</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Help;