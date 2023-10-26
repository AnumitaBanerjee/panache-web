import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AccountHeaderPage from '../../components/account-settings/account-header'

const AccountSettings = () => {
  return (
    <>
      <div className="content-panel">

        <AccountHeaderPage />

        <div className='account-btm'>
          <div className='account-list account-back'>
          <Link href="/account-settings/" className='main-link'>
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/account-settings-icon.png`}
                alt="Panache"
                width={18}
                height={18}
                priority={true}
              />
              <span>Account Settings</span>
            </Link>
          </div>
          <div className='account-list'>
            <Link href="/account-settings/change-password">Change Password</Link>
          </div>
          <div className='account-list'>
            <Link href="/account-settings/subscriptions">Subscriptions</Link>
          </div>
          <div className='account-list'>
            <Link href="/account-settings/manage-cards">Manage Cards</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default AccountSettings;