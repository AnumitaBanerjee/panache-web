import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';

const ApplicationModal = (props) => {
    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="modal-content-area application-modal"
        >
            <Modal.Header
                closeButton
            ></Modal.Header>
            <Modal.Body>
                <div className="application-modal-content">
                    <h2 className="text-center">Required Application Documents</h2>
                    <div className="application-modal-inner table-container">
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>Document Type</th>
                                    <th>File Name</th>
                                    <th>Status</th>
                                    <th>Institute</th>
                                    <th></th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Academic: Transcripts & Certiﬁcates</td>
                                    <td><Link href="#">Anchal 12th229.pdf Uploaded 22/06/2023</Link></td>
                                    <td>Pending Review</td>
                                    <td>UOR</td>
                                    <td><Link href="#">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/upload-icon.png`}
                                            alt="Panache"
                                            width={18}
                                            height={18}
                                            priority={true}
                                        />
                                    </Link></td>
                                    <td><Link href="#">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/dots-3-icon.svg`}
                                            alt="Panache"
                                            width={4}
                                            height={18}
                                            priority={true}
                                        />
                                    </Link></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><Link href="#">Anchal 12th229.pdf Uploaded 22/06/2023</Link></td>
                                    <td>Pending Review</td>
                                    <td>UOR</td>
                                    <td><Link href="#">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/upload-icon.png`}
                                            alt="Panache"
                                            width={18}
                                            height={18}
                                            priority={true}
                                        />
                                    </Link></td>
                                    <td><Link href="#">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/dots-3-icon.svg`}
                                            alt="Panache"
                                            width={4}
                                            height={18}
                                            priority={true}
                                        />
                                    </Link></td>
                                </tr>
                                <tr>
                                    <td>Experience- Letter of Reference (Second)</td>
                                    <td><Link href="#">Anchal 12th229.pdf Uploaded 22/06/2023</Link></td>
                                    <td>Pending Review</td>
                                    <td>UOR</td>
                                    <td><Link href="#">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/upload-icon.png`}
                                            alt="Panache"
                                            width={18}
                                            height={18}
                                            priority={true}
                                        />
                                    </Link></td>
                                    <td><Link href="#">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/dots-3-icon.svg`}
                                            alt="Panache"
                                            width={4}
                                            height={18}
                                            priority={true}
                                        />
                                    </Link></td>
                                </tr>
                                <tr>
                                    <td>Experience: Letter of Reference</td>
                                    <td></td>
                                    <td>Pending Review</td>
                                    <td>UOR</td>
                                    <td><Link href="#">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/upload-icon.png`}
                                            alt="Panache"
                                            width={18}
                                            height={18}
                                            priority={true}
                                        />
                                    </Link></td>
                                    <td><Link href="#">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/dots-3-icon.svg`}
                                            alt="Panache"
                                            width={4}
                                            height={18}
                                            priority={true}
                                        />
                                    </Link></td>
                                </tr>
                                <tr>
                                    <td>Identity: Passport Certiﬁed Adventus for University Application</td>
                                    <td></td>
                                    <td>Pending Review</td>
                                    <td>UOR</td>
                                    <td><Link href="#">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/upload-icon.png`}
                                            alt="Panache"
                                            width={18}
                                            height={18}
                                            priority={true}
                                        />
                                    </Link></td>
                                    <td><Link href="#">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/dots-3-icon.svg`}
                                            alt="Panache"
                                            width={4}
                                            height={18}
                                            priority={true}
                                        />
                                    </Link></td>
                                </tr>
                                <tr>
                                    <td>Academic: Transcripts & Certiﬁcates</td>
                                    <td><Link href="#">Anchal 12th229.pdf Uploaded 22/06/2023</Link></td>
                                    <td>Pending Review</td>
                                    <td>UOR</td>
                                    <td><Link href="#">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/upload-icon.png`}
                                            alt="Panache"
                                            width={18}
                                            height={18}
                                            priority={true}
                                        />
                                    </Link></td>
                                    <td><Link href="#">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/dots-3-icon.svg`}
                                            alt="Panache"
                                            width={4}
                                            height={18}
                                            priority={true}
                                        />
                                    </Link></td>
                                </tr>
                                <tr>
                                    <td>Academic: Transcripts & Certiﬁcates</td>
                                    <td><Link href="#">Anchal 12th229.pdf Uploaded 22/06/2023</Link></td>
                                    <td>Pending Review</td>
                                    <td>UOR</td>
                                    <td><Link href="#">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/upload-icon.png`}
                                            alt="Panache"
                                            width={18}
                                            height={18}
                                            priority={true}
                                        />
                                    </Link></td>
                                    <td><Link href="#">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/dots-3-icon.svg`}
                                            alt="Panache"
                                            width={4}
                                            height={18}
                                            priority={true}
                                        />
                                    </Link></td>
                                </tr>
                                <tr>
                                    <td>Academic: Transcripts & Certiﬁcates</td>
                                    <td><Link href="#">Anchal 12th229.pdf Uploaded 22/06/2023</Link></td>
                                    <td>Pending Review</td>
                                    <td>UOR</td>
                                    <td><Link href="#">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/upload-icon.png`}
                                            alt="Panache"
                                            width={18}
                                            height={18}
                                            priority={true}
                                        />
                                    </Link></td>
                                    <td><Link href="#">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/dots-3-icon.svg`}
                                            alt="Panache"
                                            width={4}
                                            height={18}
                                            priority={true}
                                        />
                                    </Link></td>
                                </tr>
                                <tr>
                                    <td>Academic: Transcripts & Certiﬁcates</td>
                                    <td><Link href="#">Anchal 12th229.pdf Uploaded 22/06/2023</Link></td>
                                    <td>Pending Review</td>
                                    <td>UOR</td>
                                    <td><Link href="#">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/upload-icon.png`}
                                            alt="Panache"
                                            width={18}
                                            height={18}
                                            priority={true}
                                        />
                                    </Link></td>
                                    <td><Link href="#">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/dots-3-icon.svg`}
                                            alt="Panache"
                                            width={4}
                                            height={18}
                                            priority={true}
                                        />
                                    </Link></td>
                                </tr>
                                <tr>
                                    <td>Academic: Transcripts & Certiﬁcates</td>
                                    <td><Link href="#">Anchal 12th229.pdf Uploaded 22/06/2023</Link></td>
                                    <td>Pending Review</td>
                                    <td>UOR</td>
                                    <td><Link href="#">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/upload-icon.png`}
                                            alt="Panache"
                                            width={18}
                                            height={18}
                                            priority={true}
                                        />
                                    </Link></td>
                                    <td><Link href="#">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/dots-3-icon.svg`}
                                            alt="Panache"
                                            width={4}
                                            height={18}
                                            priority={true}
                                        />
                                    </Link></td>
                                </tr>
                            </tbody>
                        </Table>

                    </div>
                    <div className="submit-area text-center">
                        <button className="btn btn-blue btn-big">Submit</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ApplicationModal;