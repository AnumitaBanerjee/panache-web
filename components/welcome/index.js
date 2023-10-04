import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router'

const Welcome = () => {
  const router = useRouter();
  
  return (
    <>
      <div className="welcome-panel">
        <div className="logo">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/login-bg.png`}
            alt="Panache"
            width={344}
            height={220}
            priority={true}
          />
        </div>
        <div className="welcome-content">
          <h1>Welcome To Abroad Uni Network</h1>
          <p>Proin dapibus est quis leo ultrices sodales. Donec imperdiet, urna nec imperdiet<br /> commodo, erat ligula vulputate est, non vestibulum lacus nisi ut augue.</p>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="user-radio" value="agent" id="user-agent" />
              <label className="form-check-label" htmlFor="user-agent">
                Agent
              </label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="user-radio" value="councellor" id="user-councellor" />
              <label className="form-check-label" htmlFor="user-councellor">
                Councellor
              </label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="user-radio" value="student" id="user-student" />
              <label className="form-check-label" htmlFor="user-student">
                Student
              </label>
          </div>
          <br />
          <button
            onClick={()=> router.push('/login')} 
            className='btn submit-btn' 
            type='submit'>LET'S GO</button>
        </div>
      </div>
    </>
  );
}

export default Welcome;