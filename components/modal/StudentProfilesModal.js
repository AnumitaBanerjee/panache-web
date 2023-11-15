import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Modal from 'react-bootstrap/Modal';

const StudentProfilesModal = (props) => {

    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="modal-content-area programs-modal"
        >
            <Modal.Header
                closeButton
            ></Modal.Header>
            <Modal.Body>
                <div className="programs-modal-content">
                    <div className='programs-modal-second orange-tab'>
                        
                        <div className="submit-area text-center">
                            <button className="btn btn-blue btn-big">+ Upload New Document</button>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default StudentProfilesModal;