import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AccountBody = () => {
  return (
    <>
      <div className='account-list'>
        <Link href="/edit-profile">Edit profile</Link>
      </div>
      <div className='account-list'>
        <Link href="/upload-documents">Upload documents</Link>
      </div>
      <div className='account-list'>
        <Link href="/account-settings">Account settings</Link>
      </div>
      <div className='account-list'>
        <Link href="/checkout-page">Checkout page</Link>
      </div>
      <div className='account-list'>
        <Link href="/help">Help</Link>
      </div>
      <div className='account-list'>
        <Link href="/sign-out">Sign out</Link>
      </div>
    </>
  )
}

export default AccountBody;