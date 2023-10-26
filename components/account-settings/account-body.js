import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AccountBody = () => {
  return (
    <>
      <div className='account-list'>
        <Link href="/account-settings/edit-profile">Edit Profile</Link>
      </div>
      <div className='account-list'>
        <Link href="/account-settings/upload-documents">Upload Documents</Link>
      </div>
      <div className='account-list'>
        <Link href="/account-settings/account-settings">Account Settings</Link>
      </div>
      <div className='account-list'>
        <Link href="/checkout">Checkout Page</Link>
      </div>
      <div className='account-list'>
        <Link href="/account-settings/help">Help</Link>
      </div>
      <div className='account-list last'>
        <Link href="/login">Sign Out</Link>
      </div>
    </>
  )
}

export default AccountBody;