import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from 'next/router'

const Login = () => {
    const router = useRouter();
    
    return (
        <>
            <div className="login-panel">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-panel">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/student-login-bg.png`}
                                    alt="Panache"
                                    width={606}
                                    height={434}
                                    priority={true}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-panel">
                                <h1>Welcome Back,</h1>
                                <p>Good to see you again</p>
                                <form>
                                    <div className="form-floating mb-4">
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
                                    <div className="form-floating mb-4">
                                        <input type="password" placeholder="password" className="form-control" id="floatingInput" />
                                        <label htmlFor="floatingInput">Password</label>
                                        <span className="input-icon">
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/lock-icon.png`}
                                                alt="Panache"
                                                width={15}
                                                height={18}
                                                priority={true}
                                            />
                                        </span>
                                        <span className="hide-icon">
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/hide-icon.png`}
                                                alt="Panache"
                                                width={18}
                                                height={14}
                                                priority={true}
                                            />
                                        </span>
                                    </div>
                                    <span className="d-flex"><Link href="/forgot-password">Forgot Password</Link></span>
                                    <button 
                                        onClick={() => router.push('/dashboard')} 
                                        type="button" 
                                        className="btn login-btn"
                                    >
                                        LOGIN
                                    </button>
                                </form>
                                <div className="login-footer">
                                    <h3>Or continue with</h3>
                                    <div className="social-btn">
                                        <button className="facebook-btn" type="button">
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/facebook-icon.png`}
                                                alt="Panache"
                                                width={20.12}
                                                height={20}
                                                priority={true}
                                            />Facebook
                                        </button>
                                        <button className="google-btn" type="button">
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/google-icon.png`}
                                                alt="Panache"
                                                width={19.49}
                                                height={20}
                                                priority={true}
                                            />Google
                                        </button>
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

export default Login;