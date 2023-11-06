import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'

const Congratulations = () => {

  return (
    <>
      <div className="content-panel congra-content">

        <div className='congra-main'>
          <div className='congra-main-img'>
            <Image src="/assets/images/congratulations-icon.svg" alt="Panache" width={132} height={132} priority={true} />
          </div>
          <h2>Congratulations</h2>
          <p> Payment successfully done</p>
          <div className='back-home'>
            <Link href="/dashboard" className="btn btn-blue">Back to Home page</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Congratulations;