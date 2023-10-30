import React from "react";
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
                    <div className="application-modal-inner">

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