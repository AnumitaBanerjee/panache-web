import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
//import Tiptap from '../Tiptap'
import Modal from 'react-bootstrap/Modal';

const TemplateModal = (props) => {

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
                <Modal.Title>Edit Template</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="template-modal-content">
                    <div className='template-modal'>
                        <div class="form-group">
                            <label for="TemplateName">Template Name</label>
                            <input type="email" class="form-control" id="TemplateName" aria-describedby="TemplateName" placeholder="Enter Template Name"/>
                        </div>
                        <div class="form-group">
                            <label for="TemplateContent">Content</label>
                            <textarea class="form-control" placeholder="Enter Template Content"> </textarea>
                             {/* <Tiptap /> */}
                        </div>
                    </div>
                    <div className="submit-area">
                        <button className="btn btn-blue btn-big">Add Template</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default TemplateModal;