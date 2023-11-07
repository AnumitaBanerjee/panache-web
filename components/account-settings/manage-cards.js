import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AccountHeaderPage from '../../components/account-settings/account-header'
import { useRouter } from 'next/router'

const ManageCardsPage = () => {

  const router = useRouter()
  
  return (
    <>
      <div className="content-panel">

        <AccountHeaderPage />

        <div className='account-btm'>
          <div className='account-list account-back account-main-menu'>
            <Link href="/account-settings/" className='main-link'>
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/card-icons.png`}
                alt="Panache"
                width={18}
                height={16}
                priority={true}
              />
              <span>Manage Cards</span>
            </Link>
            <Link href="/account-settings/">
              Back to main menu
            </Link>
          </div>
          <div className='account-btm-con'>
            <h3>Save Cards</h3>
            <div className='gray-plans-area'>
              <p>You don’t have any <br /> saved card</p>
            </div>
            <h3>Add Cards</h3>
            <div className='add-cards'>
              <div className='add-cards-list'>
                <Link href="#" className='active'>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/master-icon.jpg`}
                    alt="Panache"
                    width={80}
                    height={42}
                    priority={true}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/visa-icon.jpg`}
                    alt="Panache"
                    width={80}
                    height={42}
                    priority={true}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/american-icon.jpg`}
                    alt="Panache"
                    width={80}
                    height={42}
                    priority={true}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/discover-icon.jpg`}
                    alt="Panache"
                    width={80}
                    height={42}
                    priority={true}
                  />
                </Link>
              </div>


              <div className='cardList-area'>
                <div className='cardList'>
                  <div className='cardList-left'>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/master-icon.jpg`}
                      alt="Panache"
                      width={80}
                      height={42}
                      priority={true}
                    />
                    <span>Deutche Bank</span>
                  </div>
                  <div className='cardList-right'>
                    <span>****4569</span>
                    <Link href="#">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/del-icon.svg`}
                        alt="Panache"
                        width={14}
                        height={17}
                        priority={true}
                      />
                    </Link>
                  </div>
                </div>
                <div className='cardList'>
                  <div className='cardList-left'>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/visa-icon.jpg`}
                      alt="Panache"
                      width={80}
                      height={42}
                      priority={true}
                    />
                    <span>Swiss Bank</span>
                  </div>
                  <div className='cardList-right'>
                    <span>****8769</span>
                    <Link href="#">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/del-icon.svg`}
                        alt="Panache"
                        width={14}
                        height={17}
                        priority={true}
                      />
                    </Link>
                  </div>
                </div>
              </div>

              <div className='add-cards-form'>

                <form>
                  <div className="form-floating mb-3">
                    <input type="text" placeholder="John Doe" className="form-control" id="cardhInput" value="John Doe" />
                    <label htmlFor="cardhInput">Cardholder Name</label>
                    <span className="input-icon">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/name-icon.png`}
                        alt="Panache"
                        width={14}
                        height={18}
                        priority={true}
                      />
                    </span>
                  </div>

                  <div className='row mb-3'>
                    <div className='col-md-6'>
                      <div className="form-floating">
                        <input type="text" placeholder="5986 6547 6325 9658" className="form-control" id="numberInput" value="5986 6547 6325 9658" />
                        <label htmlFor="numberInput">Card Number</label>
                        <span className="input-icon">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/cardnumber-icon.png`}
                            alt="Panache"
                            width={18}
                            height={14}
                            priority={true}
                          />
                        </span>
                      </div>
                    </div>
                    <div className='col-md-6 form-flex'>
                      <div className="form-floating">
                        <input type="text" placeholder="12/06" className="form-control" id="expiryngInput" value="12/06" />
                        <label htmlFor="expiryngInput">Expiry</label>
                        <span className="input-icon">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/expiry-icon.png`}
                            alt="Panache"
                            width={18}
                            height={18}
                            priority={true}
                          />
                        </span>
                      </div>
                      <div className="form-floating form-floating-last">
                        <input type="passrowd" placeholder="***" className="form-control" id="cvvInput" value="***" />
                        <label htmlFor="cvvInput">CVV</label>
                      </div>
                    </div>
                  </div>

                  <div className="submit-area text-center mt-4">
                    <button
                      onClick={() => router.push('/dashboard')}
                      type="button"
                      className="btn btn-blue btn-big">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ManageCardsPage;