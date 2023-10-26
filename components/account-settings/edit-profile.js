import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AccountHeaderPage from '../../components/account-settings/account-header'

const EditProfile = () => {
  return (
    <>
      <div className="content-panel">

        <AccountHeaderPage />

        <div className='account-btm'>
          <div className='account-list account-back'>
            <Link href="/account-settings/" className='main-link'>
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/edit-profile-icon.png`}
                alt="Panache"
                width={18}
                height={18}
                priority={true}
              />
              <span>Edit profile</span>
            </Link>
          </div>
          <div className='account-list'>
            <Link href="/account-settings/change-profile-picture">Change profile picture</Link>
          </div>
          <div className='account-list'>
            <Link href="/account-settings/change-email-address">Change email address</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditProfile;