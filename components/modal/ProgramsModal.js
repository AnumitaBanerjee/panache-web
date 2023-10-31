import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';

const ProgramsModal = (props) => {
    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="modal-content-area programs-modal"
        >
            <Modal.Header
                closeButton
            ></Modal.Header>
            <Modal.Body>
                <div className="programs-modal-content">
                    <div className="programs-modal-head text-center">
                        <h2 className='mb-0'>Hello there,</h2>
                        <p className='mb-0'>We are excited to see you here</p>
                    </div>
                    <div className="submit-area text-center">
                        <button className="btn btn-blue btn-big">Next</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ProgramsModal;