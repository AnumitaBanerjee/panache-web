import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Modal from 'react-bootstrap/Modal';

const DocumentsVerificationModal = (props) => {

    const [showMeEnglish, setShowMeEnglish] = useState(true);
    function toggleEnglish() {
        setShowMeEnglish(!showMeEnglish);
    }

    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="modal-content-area profile-modal"
        >
            <Modal.Header closeButton>
                <Modal.Title>Documents Verification</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="documents-modal-content">
                    <div className='documents-modal orange-tab'>
                        <div className='documents-modal-top'>
                            <div className="student-profile-img">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/documents-modal.png`}
                                    alt="Panache"
                                    width={133}
                                    height={133}
                                    priority={true}
                                />
                            </div>
                            <h3>Olivia Jason</h3>
                            <div className='student-card'>
                                <span class="apply-id">Application ID: 25698745</span><span class="student-id">Student ID: 25698745</span>
                            </div>
                        </div>
                        <div className='documents-modal-btm'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='documents'>
                                        <div className='documents-l'>
                                            <span>transcripts</span>
                                            <p>2121439</p>
                                        </div>
                                        <div className='documents-r'>
                                            <Link href="#">
                                                <Image
                                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/eye-o-icon.svg`}
                                                    alt="Panache"
                                                    width={25}
                                                    height={16}
                                                    priority={true}
                                                />
                                            </Link>
                                            <Link href="#">
                                                <Image
                                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/downlaod-red.svg`}
                                                    alt="Panache"
                                                    width={18}
                                                    height={20}
                                                    priority={true}
                                                />
                                            </Link>
                                            <Link href="#">
                                                <Image
                                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/green-tick.svg`}
                                                    alt="Panache"
                                                    width={19}
                                                    height={19}
                                                    priority={true}
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='documents'>
                                        <div className='documents-l'>
                                            <span>letters of recommendation</span>
                                            <p>photo.jpg</p>
                                        </div>
                                        <div className='documents-r'>
                                            <Link href="#">
                                                <Image
                                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/eye-o-icon.svg`}
                                                    alt="Panache"
                                                    width={25}
                                                    height={16}
                                                    priority={true}
                                                />
                                            </Link>
                                            <Link href="#">
                                                <Image
                                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/downlaod-red.svg`}
                                                    alt="Panache"
                                                    width={18}
                                                    height={20}
                                                    priority={true}
                                                />
                                            </Link>
                                            <Link href="#">
                                                <Image
                                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/green-tick.svg`}
                                                    alt="Panache"
                                                    width={19}
                                                    height={19}
                                                    priority={true}
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='documents'>
                                        <div className='documents-l'>
                                            <span>certificates</span>
                                            <p>certfct.jpg, certfct2.jpg</p>
                                        </div>
                                        <div className='documents-r'>
                                            <Link href="#">
                                                <Image
                                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/eye-o-icon.svg`}
                                                    alt="Panache"
                                                    width={25}
                                                    height={16}
                                                    priority={true}
                                                />
                                            </Link>
                                            <Link href="#">
                                                <Image
                                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/downlaod-red.svg`}
                                                    alt="Panache"
                                                    width={18}
                                                    height={20}
                                                    priority={true}
                                                />
                                            </Link>
                                            <Link href="#">
                                                <Image
                                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/green-tick.svg`}
                                                    alt="Panache"
                                                    width={19}
                                                    height={19}
                                                    priority={true}
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='documents'>
                                        <div className='documents-l'>
                                            <span>test scores</span>
                                            <p>125</p>
                                        </div>
                                        <div className='documents-r'>
                                            <Link href="#">
                                                <Image
                                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/eye-o-icon.svg`}
                                                    alt="Panache"
                                                    width={25}
                                                    height={16}
                                                    priority={true}
                                                />
                                            </Link>
                                            <Link href="#">
                                                <Image
                                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/downlaod-red.svg`}
                                                    alt="Panache"
                                                    width={18}
                                                    height={20}
                                                    priority={true}
                                                />
                                            </Link>
                                            <Link href="#">
                                                <Image
                                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/green-tick.svg`}
                                                    alt="Panache"
                                                    width={19}
                                                    height={19}
                                                    priority={true}
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="submit-area text-center">
                            <button className="btn btn-blue btn-big">Submit Application</button>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default DocumentsVerificationModal;