import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Modal from 'react-bootstrap/Modal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const AgreementPolicyModal = (props) => {

    const router = useRouter();

    const [showMe, setShowMe] = useState(false);
    function toggle() {
        setShowMe(!showMe);
    }

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
            dialogClassName="modal-content-area agreement-modal"
        >
            <Modal.Header
                closeButton
            ></Modal.Header>
            <Modal.Body>
                <div className="agreement-modal-content">
                    <div className="agreement-modal-head text-center mb-4">
                        <h2 className='mb-0'>Agreement Policy</h2>
                    </div>
                    <div className="agreement-modal-body">
                        <p>Donec mollis sapien leo, et pharetra dolor cursus a. Ut malesuada sagittis dui, nec imperdiet ante facilisis sit amet. Proin nunc dolor, faucibus eu sem a, aliquet mattis ipsum. Vestibulum sagittis augue in sapien rhoncus fermentum. Sed consectetur elementum tellus sed posuere. Vestibulum congue ornare commodo.</p>
                        <p>Donec mollis sapien leo, et pharetra dolor cursus a. Ut malesuada sagittis dui, nec imperdiet ante facilisis sit amet. Proin nunc dolor, faucibus eu sem a, aliquet mattis ipsum. Vestibulum sagittis augue in sapien rhoncus fermentum. Sed consectetur elementum tellus sed posuere. Vestibulum congue ornare commodo.</p>
                        <p>Donec mollis sapien leo, et pharetra dolor cursus a. Ut malesuada sagittis dui, nec imperdiet ante facilisis sit amet. Proin nunc dolor, faucibus eu sem a, aliquet mattis ipsum. Vestibulum sagittis augue in sapien rhoncus fermentum. Sed consectetur elementum tellus sed posuere. Vestibulum congue ornare commodo.</p>
                        <p>Donec mollis sapien leo, et pharetra dolor cursus a. Ut malesuada sagittis dui, nec imperdiet ante facilisis sit amet. Proin nunc dolor, faucibus eu sem a, aliquet mattis ipsum. Vestibulum sagittis augue in sapien rhoncus fermentum. Sed consectetur elementum tellus sed posuere. Vestibulum congue ornare commodo.</p>
                        <p>Donec mollis sapien leo, et pharetra dolor cursus a. Ut malesuada sagittis dui, nec imperdiet ante facilisis sit amet. Proin nunc dolor, faucibus eu sem a, aliquet mattis ipsum. Vestibulum sagittis augue in sapien rhoncus fermentum. Sed consectetur elementum tellus sed posuere. Vestibulum congue ornare commodo.</p>
                        <p>Donec mollis sapien leo, et pharetra dolor cursus a. Ut malesuada sagittis dui, nec imperdiet ante facilisis sit amet. Proin nunc dolor, faucibus eu sem a, aliquet mattis ipsum. Vestibulum sagittis augue in sapien rhoncus fermentum. Sed consectetur elementum tellus sed posuere. Vestibulum congue ornare commodo.</p>
                        <p>Donec mollis sapien leo, et pharetra dolor cursus a. Ut malesuada sagittis dui, nec imperdiet ante facilisis sit amet. Proin nunc dolor, faucibus eu sem a, aliquet mattis ipsum. Vestibulum sagittis augue in sapien rhoncus fermentum. Sed consectetur elementum tellus sed posuere. Vestibulum congue ornare commodo.</p>
                        <div className='upload-signeture'>
                            <div className='choose_file'>
                                <input name="Select File" type="file" />
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/upload-b-icon.png`}
                                    alt="Panache"
                                    width={18}
                                    height={21}
                                    priority={true}
                                />
                                <span>Upload Signature</span>
                            </div>
                        </div>
                    </div>

                    <div className="submit-area text-center">
                        <button className="btn btn-blue btn-big" onClick={() => router.push('/dashboard')} >Submit</button>
                    </div>

                </div>
            </Modal.Body>
        </Modal>
    )
}

export default AgreementPolicyModal;