import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Modal from 'react-bootstrap/Modal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ProgramsModal = (props) => {

    const [showMe, setShowMe] = useState(false);
    function toggle() {
        setShowMe(!showMe);
    }

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

                    <div className='programs-modal-first' style={{ display: showMe ? "none" : "block" }}>
                        <div className="programs-modal-head text-center mb-4">
                            <h2 className='mb-0'>Hello there,</h2>
                            <p className='mb-0'>We are excited to see you here</p>
                        </div>
                        <div className="programs-modal-body">
                            <form>
                                <div className="form-floating ornage-line box-shoadow mb-4">
                                    <select className="form-select" id="college" aria-label="Floating label select example">
                                        <option selected>Select College</option>
                                        <option value="1">University of Wolverhampton (UK)</option>
                                        <option value="2">Two</option>
                                    </select>
                                    <label htmlFor="college">Choose College</label>
                                </div>
                                <div className="form-floating ornage-line box-shoadow mb-4">
                                    <select className="form-select" id="program" aria-label="Floating label select example">
                                        <option selected>Select Program</option>
                                        <option value="1">BSc in Applied Data Science</option>
                                        <option value="2">Two</option>
                                    </select>
                                    <label htmlFor="program">Choose Program</label>
                                </div>
                                <div className='form-compact ornage-line box-shoadow mb-4'>
                                    <div className="form-floating">
                                        <select className="form-select" id="intake" aria-label="Floating label select example">
                                            <option selected>Select Intake</option>
                                            <option value="1">BSc in Applied Data Science</option>
                                            <option value="2">Two</option>
                                        </select>
                                        <label htmlFor="intake">Choose Intake</label>
                                    </div>
                                    <div className="form-floating">
                                        <select className="form-select" id="year" aria-label="Floating label select example">
                                            <option selected>Select Intake</option>
                                            <option value="1">BSc in Applied Data Science</option>
                                            <option value="2">Two</option>
                                        </select>
                                        <label htmlFor="year">Choose Year</label>
                                    </div>
                                </div>
                                <div className="form-floating ornage-line box-shoadow mb-4">
                                    <textarea className="form-control" placeholder="Enter Remarks..." id="remarks"></textarea>
                                    <label htmlFor="remarks">Remarks</label>
                                </div>
                            </form>
                        </div>
                        <div className="submit-area text-center">
                            <button className="btn btn-blue btn-big" onClick={toggle}>Next</button>
                        </div>
                    </div>
                    <div className='programs-modal-second orange-tab' style={{ display: showMe ? "block" : "none" }}>
                        <Tabs>
                            <TabList>
                                <Tab>Personal Information</Tab>
                                <Tab>Academic</Tab>
                                <Tab>Work Experience</Tab>
                                <Tab>English Test</Tab>
                            </TabList>
                            <TabPanel>
                                <div className="programs-modal-head text-center mb-4">
                                    <h2 className='mb-0'>Hello there,</h2>
                                    <p className='mb-0'>We are excited to see you here</p>
                                </div>
                                <div className="programs-modal-body">
                                    <div className="modal-secroll">
                                        <form>

                                            <div className='form-compact ornage-line box-shoadow mb-4'>
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="name" placeholder="John Doe" value="John Doe" />
                                                    <label htmlFor="name">Name</label>
                                                </div>
                                                <div className="form-floating">
                                                    <input type="email" className="form-control" id="email" placeholder="example@sample.com" value="example@sample.com" />
                                                    <label htmlFor="email">Email</label>
                                                </div>
                                            </div>
                                            <div className='form-compact ornage-line box-shoadow mb-4'>
                                                <div className="form-floating">
                                                    <input type="tel" className="form-control" id="phone" placeholder="0987654321" value="0987654321" />
                                                    <label htmlFor="phone">Phone</label>
                                                </div>
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="StudentUrlLink" placeholder="https://app.cras et nulla biben.com" value="https://app.cras et nulla biben.com" />
                                                    <label htmlFor="StudentUrlLink">Student Url Link</label>
                                                </div>
                                            </div>

                                            <div className='personal-information'>
                                                <h3>Personal Information</h3>
                                                <div className='form-compact ornage-line box-shoadow mb-4'>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="name" placeholder="07/09/1994" value="07/09/1994" />
                                                        <label htmlFor="name">Date of Birth</label>
                                                    </div>
                                                    <div className="form-floating">
                                                        <input type="email" className="form-control" id="email" placeholder="example@sample.com" value="example@sample.com" />
                                                        <label htmlFor="email">Gender</label>
                                                    </div>
                                                </div>
                                                <div className='form-floating ornage-line box-shoadow mb-4'>
                                                    <input type="text" className="form-control" id="MaritalStatus" placeholder="Married" value="Married" />
                                                    <label htmlFor="MaritalStatus">Marital Status</label>
                                                </div>
                                            </div>


                                            <div className='mailing-address'>
                                                <h3>Mailing Address</h3>
                                                <div className='form-floating ornage-line box-shoadow mb-4'>
                                                    <input type="text" className="form-control" id="Address1" placeholder="Integer sit amet diam" value="Integer sit amet diam" />
                                                    <label htmlFor="Address1">Address 1</label>
                                                </div>
                                                <div className='form-floating ornage-line box-shoadow mb-4'>
                                                    <input type="text" className="form-control" id="Address1" placeholder="Integer sit amet diam" value="Integer sit amet diam" />
                                                    <label htmlFor="Address1">Address 1</label>
                                                </div>
                                                <div className='form-compact ornage-line box-shoadow mb-4'>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="Country" placeholder="India" value="India" />
                                                        <label htmlFor="Country">Country</label>
                                                    </div>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="State" placeholder="Puducherry" value="Puducherry" />
                                                        <label htmlFor="State">State</label>
                                                    </div>
                                                </div>
                                                <div className='form-compact ornage-line box-shoadow mb-4'>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="City" placeholder="Gurdaspur" value="Gurdaspur" />
                                                        <label htmlFor="City">City</label>
                                                    </div>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="Pincode" placeholder="143519" value="143519" />
                                                        <label htmlFor="Pincode">Pincode</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-check form-check-inline mb-4">
                                                <input className="form-check-input" type="radio" name="user-radio" value="agent" id="user-agent" />
                                                <label className="form-check-label" htmlFor="user-agent">
                                                    Copy the mailing address as permanent
                                                </label>
                                            </div>

                                            <div className='permanent-address'>
                                                <h3>Permanent Address</h3>
                                                <div className='form-floating ornage-line box-shoadow mb-4'>
                                                    <input type="text" className="form-control" id="Address1" placeholder="Integer sit amet diam" value="Integer sit amet diam" />
                                                    <label htmlFor="Address1">Address 1</label>
                                                </div>
                                                <div className='form-floating ornage-line box-shoadow mb-4'>
                                                    <input type="text" className="form-control" id="Address1" placeholder="Integer sit amet diam" value="Integer sit amet diam" />
                                                    <label htmlFor="Address1">Address 1</label>
                                                </div>
                                                <div className='form-compact ornage-line box-shoadow mb-4'>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="Country" placeholder="India" value="India" />
                                                        <label htmlFor="Country">Country</label>
                                                    </div>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="State" placeholder="Puducherry" value="Puducherry" />
                                                        <label htmlFor="State">State</label>
                                                    </div>
                                                </div>
                                                <div className='form-compact ornage-line box-shoadow mb-4'>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="City" placeholder="Gurdaspur" value="Gurdaspur" />
                                                        <label htmlFor="City">City</label>
                                                    </div>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="Pincode" placeholder="143519" value="143519" />
                                                        <label htmlFor="Pincode">Pincode</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='passport-information'>
                                                <h3>Passport Information</h3>
                                                <div className='form-compact ornage-line box-shoadow mb-4'>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="PassportNumber" placeholder="S2522682" value="S2522682" />
                                                        <label htmlFor="PassportNumber">Passport Number</label>
                                                    </div>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="IssueDate" placeholder="28/06/2018" value="28/06/2018" />
                                                        <label htmlFor="IssueDate">Issue Date</label>
                                                    </div>
                                                </div>
                                                <div className='form-compact ornage-line box-shoadow mb-4'>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="ExpiryDate" placeholder="27/06/2028" value="27/06/2028" />
                                                        <label htmlFor="ExpiryDate">Expiry Date</label>
                                                    </div>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="IssueCountry" placeholder="India" value="India" />
                                                        <label htmlFor="IssueCountry">Issue Country</label>
                                                    </div>
                                                </div>
                                                <div className='form-compact ornage-line box-shoadow mb-4'>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="PlaceofIssue" placeholder="Jalandhar" value="Jalandhar" />
                                                        <label htmlFor="PlaceofIssue">Place of Issue</label>
                                                    </div>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="CountryofBirth" placeholder="India" value="India" />
                                                        <label htmlFor="CountryofBirth">Country of Birth</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='passport-information'>
                                                <h3>Passport Information</h3>
                                                <div className='form-compact ornage-line box-shoadow mb-4'>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="Nationality" placeholder="India" value="India" />
                                                        <label htmlFor="Nationality">Nationality</label>
                                                    </div>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="Citizenship" placeholder="India" value="India" />
                                                        <label htmlFor="Citizenship">Citizenship</label>
                                                    </div>
                                                </div>
                                                <div className='form-floating ornage-line box-shoadow mb-4'>
                                                    <input type="text" className="form-control" id="applicant-citizen" placeholder="No" value="No" />
                                                    <label htmlFor="applicant-citizen">Is the applicant a citizen of more than one country?</label>
                                                </div>
                                                <div className='form-floating ornage-line box-shoadow mb-4'>
                                                    <input type="text" className="form-control" id="applicant-living" placeholder="No" value="No" />
                                                    <label htmlFor="applicant-living">Is the applicant living and studying in any other country?</label>
                                                </div>
                                            </div>


                                            <div className='background-info'>
                                                <h3>Background Info</h3>
                                                <div className='form-floating ornage-line box-shoadow mb-4'>
                                                    <input type="text" className="form-control" id="applicant-immigration" placeholder="No" value="No" />
                                                    <label htmlFor="applicant-immigration">Has applicant applied for any type of immigration into any country?</label>
                                                </div>
                                                <div className='form-floating ornage-line box-shoadow mb-4'>
                                                    <input type="text" className="form-control" id="applicant-suffer" placeholder="No" value="No" />
                                                    <label htmlFor="applicant-suffer">Does applicant suffer from a serious medical condition?</label>
                                                </div>
                                                <div className='form-floating ornage-line box-shoadow mb-4'>
                                                    <input type="text" className="form-control" id="applicant-refusal" placeholder="No" value="No" />
                                                    <label htmlFor="applicant-refusal">Has applicant Visa refusal for any country?</label>
                                                </div>
                                                <div className='form-floating ornage-line box-shoadow mb-4'>
                                                    <input type="text" className="form-control" id="applicant-criminal" placeholder="No" value="No" />
                                                    <label htmlFor="applicant-criminal">Has applicant ever been convicted of a criminal offence?</label>
                                                </div>
                                            </div>

                                            <div className='background-info'>
                                                <h3>Background Info</h3>
                                                <div className='form-floating ornage-line box-shoadow mb-4'>
                                                    <input type="text" className="form-control" id="applicant-Name" placeholder="Balwinder Singh" value="Balwinder Singh" />
                                                    <label htmlFor="applicant-Name">Name</label>
                                                </div>
                                                <div className='form-compact ornage-line box-shoadow mb-4'>
                                                    <div className="form-floating">
                                                        <input type="email" className="form-control" id="Email" placeholder="sweety23654@gmail.com" value="sweety23654@gmail.com" />
                                                        <label htmlFor="Email">Email</label>
                                                    </div>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="RelationApplicant" placeholder="Mother" value="Mother" />
                                                        <label htmlFor="RelationApplicant">Relation with Applicant</label>
                                                    </div>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                Academic
                            </TabPanel>
                            <TabPanel>
                                Work Experience
                            </TabPanel>
                            <TabPanel>
                                English Test
                            </TabPanel>
                        </Tabs>
                        <div className="submit-area text-center">
                            <button className="btn btn-blue btn-big">Next</button>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ProgramsModal;