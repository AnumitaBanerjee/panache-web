import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AccountHeaderPage from '../../components/account-settings/account-header'

const ChangePassword = () => {
  return (
    <>
      <div className="content-panel">

        <AccountHeaderPage />

        <div className='account-btm'>

          <div className='account-list account-back account-main-menu'>
            <Link href="/account-settings/account-settings" className='main-link'>
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/edit-profile-icon.png`}
                alt="Panache"
                width={16}
                height={18}
                priority={true}
              />
              <span>Change Password</span>
            </Link>
            <Link href="/account-settings/">
              Back to main menu
            </Link>
          </div>

          <div className='change-email account-details-area'>
            <form>

              <div className="form-floating mb-3">
                <input type="password" placeholder="email" className="form-control" id="floatingInput" />
                <label htmlFor="floatingInput">Enter Password</label>
              </div>

              <div className="form-floating mb-3">
                <input type="password" placeholder="password" className="form-control" id="floatingInput" />
                <label htmlFor="floatingInput">Re-Enter Password</label>
              </div>

              <button className="btn btn-blue btn-big" type="submit">Submit</button>

            </form>
          </div>

        </div>
      </div>
    </>
  )
}

export default ChangePassword;