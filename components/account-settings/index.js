import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AccountHeaderPage from '../../components/account-settings/account-header'
import AccountBodyPage from '../../components/account-settings/account-body'

const AccountSettings = () => {
  return (
    <>
      <div className="content-panel">

        <AccountHeaderPage />

        <div className='account-btm'>
          <AccountBodyPage />
        </div>
      </div>
    </>
  )
}

export default AccountSettings;