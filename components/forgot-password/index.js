import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from 'next/router'

const ForgotPassword = () => {
    const router = useRouter();

    return (
        <>
            <div className="login-panel forgot-password-panel">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-panel">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/forgot-bg.png`}
                                    alt="Panache"
                                    width={573}
                                    height={449}
                                    priority={true}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-panel">
                                <div className='back-panel mb-4'>
                                    <button onClick={() => router.push('/login')} className="back-btn" type="button">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/back-icon.png`}
                                            alt="Panache"
                                            width={6.15}
                                            height={12}
                                            priority={true}
                                        />
                                    </button><span>Back</span>
                                </div>
                                <h1>Forgot Password</h1>
                                <p>Fill in you email and we’ll send a code to reset your password</p>
                                <form>
                                    <div className="form-floating mb-3">
                                        <input type="email" placeholder="email" className="form-control" id="floatingInput" />
                                        <label htmlFor="floatingInput">Email</label>
                                        <span className="input-icon">
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/email-icon.png`}
                                                alt="Panache"
                                                width={18}
                                                height={14.67}
                                                priority={true}
                                            />
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => router.push('/login')}
                                        type="button"
                                        className="btn login-btn"
                                    >
                                        SUBMIT
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword;