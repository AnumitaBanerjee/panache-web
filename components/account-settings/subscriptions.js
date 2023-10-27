import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AccountHeaderPage from '../../components/account-settings/account-header'

const Subscriptions = () => {
  return (
    <>
      <div className="content-panel">

        <AccountHeaderPage />

        <div className='account-btm'>
          <div className='account-list account-back account-main-menu'>
            <Link href="/account-settings/" className='main-link'>
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/subscriptions-icon.png`}
                alt="Panache"
                width={16}
                height={18}
                priority={true}
              />
              <span>Subscriptions</span>
            </Link>
            <Link href="/account-settings/">
              Back to main menu
            </Link>
          </div>
          <div className='account-btm-con'>
            <h3>Active Plans</h3>
            <div className='gray-plans-area'>
              <p>You don’t have any <br /> active subscriptions</p>
            </div>
            <h3>Available Plans</h3>
            <div className='available-plans'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='available-plan'>
                    <div className='available-plan-top'>
                      <h3>Personal Plan</h3>
                      <span>$559/mo</span>
                    </div>
                    <div className='available-plan-mid'>
                      <ul>
                        <li>Etiam ultricies, est nec egestas</li>
                        <li>Donec interdum facilisis</li>
                        <li>Orci varius natoque penatibus</li>
                      </ul>
                    </div>
                    <div className='available-plan-btm'>
                      <button className='btn btn-orange'>Subscribe</button>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='available-plan'>
                    <div className='available-plan-top'>
                      <h3>Personal Plan</h3>
                      <span>$559/mo</span>
                    </div>
                    <div className='available-plan-mid'>
                      <ul>
                        <li>Etiam ultricies, est nec egestas</li>
                        <li>Donec interdum facilisis</li>
                        <li>Orci varius natoque penatibus</li>
                      </ul>
                    </div>
                    <div className='available-plan-btm'>
                      <button className='btn btn-orange'>Subscribe</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Subscriptions;