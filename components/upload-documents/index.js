import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from 'next/router'

const UploadDocuments = () => {
    const router = useRouter();

    return (
        <>
            <div className="login-panel upload-panel">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-panel">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/upload-documents-img.png`}
                                    alt="Panache"
                                    width={713}
                                    height={460}
                                    priority={true}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-panel">
                                <div className='back-panel mb-4'>
                                    <button onClick={() => router.push('/login-agent')} className="back-btn" type="button">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/back-icon.png`}
                                            alt="Panache"
                                            width={6.15}
                                            height={12}
                                            priority={true}
                                        />
                                    </button><span>Back</span>
                                </div>
                                <h1 className='mb-4'>Upload Documents</h1>
                                <form>
                                    <div className="form-floating upload-form mb-3">
                                        <input type="text" placeholder="email" className="form-control" id="CompanyID" />
                                        <label htmlFor="CompanyID">Company ID</label>
                                        <span className="input-icon">
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/upload-icon.png`}
                                                alt="Panache"
                                                width={18}
                                                height={19}
                                                priority={true}
                                            />
                                        </span>
                                    </div>
                                    <div className="form-floating upload-form mb-3">
                                        <input type="text" placeholder="email" className="form-control" id="AgentID" />
                                        <label htmlFor="AgentID">Agent ID</label>
                                        <span className="input-icon">
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/upload-icon.png`}
                                                alt="Panache"
                                                width={18}
                                                height={19}
                                                priority={true}
                                            />
                                        </span>
                                    </div>
                                    <div className="form-floating upload-form mb-3">
                                        <input type="text" placeholder="email" className="form-control" id="AgentPhoto" />
                                        <label htmlFor="AgentPhoto">Agent Photo</label>
                                        <span className="input-icon">
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/upload-icon.png`}
                                                alt="Panache"
                                                width={18}
                                                height={19}
                                                priority={true}
                                            />
                                        </span>
                                    </div>
                                    <div className="form-floating upload-form mb-3">
                                        <input type="text" placeholder="email" className="form-control" id="SignatureAgent" />
                                        <label htmlFor="SignatureAgent">Signature of Agent</label>
                                        <span className="input-icon">
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/upload-icon.png`}
                                                alt="Panache"
                                                width={18}
                                                height={19}
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

export default UploadDocuments;