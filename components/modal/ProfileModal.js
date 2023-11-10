import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Modal from 'react-bootstrap/Modal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ProfileModal = (props) => {

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
            dialogClassName="modal-content-area programs-modal"
        >
            <Modal.Header
                closeButton
            ></Modal.Header>
            <Modal.Body>
                <div className="programs-modal-content">
                    <div className='programs-modal-second orange-tab'>
                        <Tabs>
                            <TabList>
                                <Tab>Personal Information</Tab>
                                <Tab>Academic</Tab>
                                <Tab>Work Experience</Tab>
                                <Tab>English Test</Tab>
                            </TabList>
                            <TabPanel>
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
                                <div className="programs-modal-body">
                                    <div className="modal-secroll">
                                        <form>

                                            <div className='education-summary'>
                                                <h3>Education Summary</h3>
                                                <div className='form-floating ornage-line box-shoadow mb-4'>
                                                    <select className="form-select" id="year" aria-label="Highest-Education">
                                                        <option selected>Graduation</option>
                                                        <option value="1">Other</option>
                                                    </select>
                                                    <label htmlFor="Highest-Education">Highest Level of Education</label>
                                                </div>
                                            </div>

                                            <div className='graduation'>
                                                <h3>Graduation</h3>
                                                <div className='form-floating ornage-line box-shoadow mb-4'>
                                                    <input type="text" className="form-control" id="Name-Institution" placeholder="Buc College" value="Buc College" />
                                                    <label htmlFor="Name-Institution">Name of the Institution</label>
                                                </div>
                                                <div className='form-compact ornage-line box-shoadow mb-4'>
                                                    <div className="form-floating">
                                                        <select className="form-select" id="year" aria-label="CountryStudy">
                                                            <option selected>India</option>
                                                            <option value="1">Other</option>
                                                        </select>
                                                        <label htmlFor="CountryStudy">Country of Study</label>
                                                    </div>
                                                    <div className="form-floating">
                                                        <select className="form-select" id="StateStudy" aria-label="Name-Institution">
                                                            <option selected>Punjab</option>
                                                            <option value="1">Other</option>
                                                        </select>
                                                        <label htmlFor="StateStudy">State of Study</label>
                                                    </div>
                                                </div>
                                                <div className='form-compact ornage-line box-shoadow mb-4'>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="CityStudy" placeholder="Batala" value="Batala" />
                                                        <label htmlFor="CityStudy">City of Study</label>
                                                    </div>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="Qualification" placeholder="B.SC" value="B.SC" />
                                                        <label htmlFor="Qualification">Qualification Achieved/Degree Awarded</label>
                                                    </div>
                                                </div>
                                                <div className='form-compact ornage-line box-shoadow mb-4'>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="Backlogs" placeholder="Enter Backlogs" value="Enter Backlogs" />
                                                        <label htmlFor="Backlogs">Backlogs</label>
                                                    </div>
                                                    <div className="form-floating">
                                                        <select className="form-select" id="GradingSystem" aria-label="GradingSystem">
                                                            <option selected>Out of 100</option>
                                                            <option value="1">Other</option>
                                                        </select>
                                                        <label htmlFor="GradingSystem">Grading System</label>
                                                    </div>
                                                </div>
                                                <div className='form-compact ornage-line box-shoadow mb-4'>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="Score" placeholder="60" value="60" />
                                                        <label htmlFor="Score">Score</label>
                                                    </div>
                                                    <div className="form-floating">
                                                        <select className="form-select" id="PrimaryLanguage" aria-label="PrimaryLanguage">
                                                            <option selected>English</option>
                                                            <option value="1">Other</option>
                                                        </select>
                                                        <label htmlFor="PrimaryLanguage">Primary Language of Instruction</label>
                                                    </div>
                                                </div>
                                                <div className='form-compact ornage-line box-shoadow mb-4'>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="Score" placeholder="01/12/2014" value="01/12/2014" />
                                                        <label htmlFor="StartDate">Start Date</label>
                                                    </div>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="EndDate" placeholder="01/05/2016" value="01/05/2016" />
                                                        <label htmlFor="EndDate">End Date</label>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className='grade-equivalent'>
                                                <h3>Grade 12th or equivalent</h3>
                                                <div className='form-floating ornage-line box-shoadow mb-4'>
                                                    <input type="text" className="form-control" id="Name-Institution" placeholder="Punjab School Education" value="Punjab School Education" />
                                                    <label htmlFor="Name-Institution">Name of the Institution</label>
                                                </div>
                                                <div className='form-compact ornage-line box-shoadow mb-4'>
                                                    <div className="form-floating">
                                                        <select className="form-select" id="year" aria-label="CountryStudy">
                                                            <option selected>India</option>
                                                            <option value="1">Other</option>
                                                        </select>
                                                        <label htmlFor="CountryStudy">Country of Study</label>
                                                    </div>
                                                    <div className="form-floating">
                                                        <select className="form-select" id="StateStudy" aria-label="Name-Institution">
                                                            <option selected>Punjab</option>
                                                            <option value="1">Other</option>
                                                        </select>
                                                        <label htmlFor="StateStudy">State of Study</label>
                                                    </div>
                                                </div>
                                                <div className='form-compact ornage-line box-shoadow mb-4'>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="CityStudy" placeholder="Batala" value="Batala" />
                                                        <label htmlFor="CityStudy">City of Study</label>
                                                    </div>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="Qualification" placeholder="B.SC" value="B.SC" />
                                                        <label htmlFor="Qualification">Qualification Achieved/Degree Awarded</label>
                                                    </div>
                                                </div>
                                                <div className='form-compact ornage-line box-shoadow mb-4'>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="Backlogs" placeholder="Enter Backlogs" value="Enter Backlogs" />
                                                        <label htmlFor="Backlogs">Backlogs</label>
                                                    </div>
                                                    <div className="form-floating">
                                                        <select className="form-select" id="GradingSystem" aria-label="GradingSystem">
                                                            <option selected>Out of 100</option>
                                                            <option value="1">Other</option>
                                                        </select>
                                                        <label htmlFor="GradingSystem">Grading System</label>
                                                    </div>
                                                </div>
                                                <div className='form-compact ornage-line box-shoadow mb-4'>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="Score" placeholder="60" value="60" />
                                                        <label htmlFor="Score">Score</label>
                                                    </div>
                                                    <div className="form-floating">
                                                        <select className="form-select" id="PrimaryLanguage" aria-label="PrimaryLanguage">
                                                            <option selected>English</option>
                                                            <option value="1">Other</option>
                                                        </select>
                                                        <label htmlFor="PrimaryLanguage">Primary Language of Instruction</label>
                                                    </div>
                                                </div>
                                                <div className='form-compact ornage-line box-shoadow mb-4'>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="Score" placeholder="01/12/2014" value="01/12/2014" />
                                                        <label htmlFor="StartDate">Start Date</label>
                                                    </div>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="EndDate" placeholder="01/05/2016" value="01/05/2016" />
                                                        <label htmlFor="EndDate">End Date</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='grade-equivalent'>
                                                <h3>Grade 10th or equivalent</h3>
                                                <div className='form-floating ornage-line box-shoadow mb-4'>
                                                    <input type="text" className="form-control" id="Name-Institution" placeholder="Punjab School Education" value="Punjab School Education" />
                                                    <label htmlFor="Name-Institution">Name of the Institution</label>
                                                </div>
                                                <div className='form-compact ornage-line box-shoadow mb-4'>
                                                    <div className="form-floating">
                                                        <select className="form-select" id="year" aria-label="CountryStudy">
                                                            <option selected>India</option>
                                                            <option value="1">Other</option>
                                                        </select>
                                                        <label htmlFor="CountryStudy">Country of Study</label>
                                                    </div>
                                                    <div className="form-floating">
                                                        <select className="form-select" id="StateStudy" aria-label="Name-Institution">
                                                            <option selected>Punjab</option>
                                                            <option value="1">Other</option>
                                                        </select>
                                                        <label htmlFor="StateStudy">State of Study</label>
                                                    </div>
                                                </div>
                                                <div className='form-compact ornage-line box-shoadow mb-4'>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="CityStudy" placeholder="Batala" value="Batala" />
                                                        <label htmlFor="CityStudy">City of Study</label>
                                                    </div>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="Qualification" placeholder="B.SC" value="B.SC" />
                                                        <label htmlFor="Qualification">Qualification Achieved/Degree Awarded</label>
                                                    </div>
                                                </div>
                                                <div className='form-compact ornage-line box-shoadow mb-4'>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="Backlogs" placeholder="Enter Backlogs" value="Enter Backlogs" />
                                                        <label htmlFor="Backlogs">Backlogs</label>
                                                    </div>
                                                    <div className="form-floating">
                                                        <select className="form-select" id="GradingSystem" aria-label="GradingSystem">
                                                            <option selected>Out of 100</option>
                                                            <option value="1">Other</option>
                                                        </select>
                                                        <label htmlFor="GradingSystem">Grading System</label>
                                                    </div>
                                                </div>
                                                <div className='form-compact ornage-line box-shoadow mb-4'>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="Score" placeholder="60" value="60" />
                                                        <label htmlFor="Score">Score</label>
                                                    </div>
                                                    <div className="form-floating">
                                                        <select className="form-select" id="PrimaryLanguage" aria-label="PrimaryLanguage">
                                                            <option selected>English</option>
                                                            <option value="1">Other</option>
                                                        </select>
                                                        <label htmlFor="PrimaryLanguage">Primary Language of Instruction</label>
                                                    </div>
                                                </div>
                                                <div className='form-compact ornage-line box-shoadow mb-4'>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="Score" placeholder="01/12/2014" value="01/12/2014" />
                                                        <label htmlFor="StartDate">Start Date</label>
                                                    </div>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="EndDate" placeholder="01/05/2016" value="01/05/2016" />
                                                        <label htmlFor="EndDate">End Date</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='additional'>
                                                <Link href="#">+ Add Additional Qualification</Link>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="programs-modal-body">
                                    <div className="modal-secroll">
                                        <form>
                                            <div className='work-experience'>
                                                <h3>Work Experience</h3>
                                                <div className='form-floating ornage-line box-shoadow mb-4'>
                                                    <input type="text" className="form-control" id="Organization-Address" placeholder="Web Tech" value="Web Tech" />
                                                    <label htmlFor="Organization-Address">Name of the Organization & Address</label>
                                                </div>
                                                <div className='form-compact ornage-line box-shoadow mb-4'>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="Position" placeholder="Designer" value="Designer" />
                                                        <label htmlFor="Position">Position</label>
                                                    </div>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="JobProfile" placeholder="Designer" value="Designer" />
                                                        <label htmlFor="JobProfile">Job Profile</label>
                                                    </div>
                                                </div>
                                                <div className='form-compact ornage-line box-shoadow mb-4'>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="WorkingFrom" placeholder="06/03/2017" value="06/03/2017" />
                                                        <label htmlFor="WorkingFrom">Working From</label>
                                                    </div>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="Working-upto" placeholder="31/05/2023" value="31/05/2023" />
                                                        <label htmlFor="Working-upto">Working upto</label>
                                                    </div>
                                                </div>
                                                <div className='form-compact ornage-line box-shoadow mb-4'>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="ModeSalary" placeholder="Cash" value="Cash" />
                                                        <label htmlFor="Mode-Salary">Mode of Salary</label>
                                                    </div>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="currently" placeholder="No" value="No" />
                                                        <label htmlFor="currently">I am currently working here</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='additional'>
                                                <Link href="#">+ Add Experience</Link>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="programs-modal-body english-modal">

                                    <div className="modal-secroll">

                                        <div className="mb-4 english-form-check">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="english-radio" value="agent" id="english-radio" />
                                                <label className="form-check-label" htmlFor="english-radio">
                                                    English language waiver
                                                </label>
                                            </div>
                                        </div>

                                        <div className='test-list'>
                                            <h3>Tests</h3>
                                            <div className='test-sublist'>
                                                <div className='test-sublist-top'>
                                                    <h4>GRE</h4>
                                                    <div className='additional'>
                                                        <Link href="#" onClick={toggleEnglish}>+ Add Experience</Link>
                                                    </div>
                                                </div>
                                                <div className='test-sublist-btm' style={{ display: showMeEnglish ? "none" : "block" }}>
                                                    <div className='form-compact ornage-line box-shoadow mb-4'>
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control" id="OverallScore" placeholder="Overall Score" value="Overall Score" />
                                                            <label htmlFor="OverallScore">Overall Score</label>
                                                        </div>
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control" id="DateExamination" placeholder="Date of Examination" value="Date of Examination" />
                                                            <label htmlFor="DateExamination">Date of Examination</label>
                                                        </div>
                                                    </div>
                                                    <div className='form-compact ornage-line box-shoadow mb-4'>
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control" id="Quantitative" placeholder="Quantitative" value="Quantitative" />
                                                            <label htmlFor="Quantitative">Quantitative</label>
                                                        </div>
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control" id="Verbal" placeholder="Verbal" value="Verbal" />
                                                            <label htmlFor="Verbal">Verbal</label>
                                                        </div>
                                                    </div>
                                                    <div className="form-floating ornage-line box-shoadow mb-4">
                                                        <input type="text" className="form-control" id="AnalyticalWriting" placeholder="Analytical Writing" value="Analytical Writing" />
                                                        <label htmlFor="AnalyticalWriting">Analytical Writing</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='test-sublist'>
                                                <div className='test-sublist-top'>
                                                    <h4>GMAT</h4>
                                                    <div className='additional'>
                                                        <Link href="#" onClick={toggleEnglish}>+ Add Experience</Link>
                                                    </div>
                                                </div>
                                                <div className='test-sublist-btm' style={{ display: showMeEnglish ? "none" : "block" }}>
                                                    <div className='form-compact ornage-line box-shoadow mb-4'>
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control" id="OverallScore" placeholder="Overall Score" value="Overall Score" />
                                                            <label htmlFor="OverallScore">Overall Score</label>
                                                        </div>
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control" id="DateExamination" placeholder="Date of Examination" value="Date of Examination" />
                                                            <label htmlFor="DateExamination">Date of Examination</label>
                                                        </div>
                                                    </div>
                                                    <div className='form-compact ornage-line box-shoadow mb-4'>
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control" id="Quantitative" placeholder="Quantitative" value="Quantitative" />
                                                            <label htmlFor="Quantitative">Quantitative</label>
                                                        </div>
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control" id="Verbal" placeholder="Verbal" value="Verbal" />
                                                            <label htmlFor="Verbal">Verbal</label>
                                                        </div>
                                                    </div>
                                                    <div className="form-floating ornage-line box-shoadow mb-4">
                                                        <input type="text" className="form-control" id="AnalyticalWriting" placeholder="Analytical Writing" value="Analytical Writing" />
                                                        <label htmlFor="AnalyticalWriting">Analytical Writing</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='test-sublist'>
                                                <div className='test-sublist-top'>
                                                    <h4>TOEFL</h4>
                                                    <div className='additional'>
                                                        <Link href="#" onClick={toggleEnglish}>+ Add Experience</Link>
                                                    </div>
                                                </div>
                                                <div className='test-sublist-btm' style={{ display: showMeEnglish ? "none" : "block" }}>
                                                    <div className='form-compact ornage-line box-shoadow mb-4'>
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control" id="OverallScore" placeholder="Overall Score" value="Overall Score" />
                                                            <label htmlFor="OverallScore">Overall Score</label>
                                                        </div>
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control" id="DateExamination" placeholder="Date of Examination" value="Date of Examination" />
                                                            <label htmlFor="DateExamination">Date of Examination</label>
                                                        </div>
                                                    </div>
                                                    <div className='form-compact ornage-line box-shoadow mb-4'>
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control" id="Quantitative" placeholder="Quantitative" value="Quantitative" />
                                                            <label htmlFor="Quantitative">Quantitative</label>
                                                        </div>
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control" id="Verbal" placeholder="Verbal" value="Verbal" />
                                                            <label htmlFor="Verbal">Verbal</label>
                                                        </div>
                                                    </div>
                                                    <div className="form-floating ornage-line box-shoadow mb-4">
                                                        <input type="text" className="form-control" id="AnalyticalWriting" placeholder="Analytical Writing" value="Analytical Writing" />
                                                        <label htmlFor="AnalyticalWriting">Analytical Writing</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='test-sublist'>
                                                <div className='test-sublist-top'>
                                                    <h4>IELTS</h4>
                                                    <div className='additional'>
                                                        <Link href="#" onClick={toggleEnglish}>+ Add Experience</Link>
                                                    </div>
                                                </div>
                                                <div className='test-sublist-btm' style={{ display: showMeEnglish ? "none" : "block" }}>
                                                    <div className='form-compact ornage-line box-shoadow mb-4'>
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control" id="OverallScore" placeholder="Overall Score" value="Overall Score" />
                                                            <label htmlFor="OverallScore">Overall Score</label>
                                                        </div>
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control" id="DateExamination" placeholder="Date of Examination" value="Date of Examination" />
                                                            <label htmlFor="DateExamination">Date of Examination</label>
                                                        </div>
                                                    </div>
                                                    <div className='form-compact ornage-line box-shoadow mb-4'>
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control" id="Quantitative" placeholder="Quantitative" value="Quantitative" />
                                                            <label htmlFor="Quantitative">Quantitative</label>
                                                        </div>
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control" id="Verbal" placeholder="Verbal" value="Verbal" />
                                                            <label htmlFor="Verbal">Verbal</label>
                                                        </div>
                                                    </div>
                                                    <div className="form-floating ornage-line box-shoadow mb-4">
                                                        <input type="text" className="form-control" id="AnalyticalWriting" placeholder="Analytical Writing" value="Analytical Writing" />
                                                        <label htmlFor="AnalyticalWriting">Analytical Writing</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='test-sublist'>
                                                <div className='test-sublist-top'>
                                                    <h4>DET</h4>
                                                    <div className='additional'>
                                                        <Link href="#" onClick={toggleEnglish}>+ Add Experience</Link>
                                                    </div>
                                                </div>
                                                <div className='test-sublist-btm' style={{ display: showMeEnglish ? "none" : "block" }}>
                                                    <div className='form-compact ornage-line box-shoadow mb-4'>
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control" id="OverallScore" placeholder="Overall Score" value="Overall Score" />
                                                            <label htmlFor="OverallScore">Overall Score</label>
                                                        </div>
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control" id="DateExamination" placeholder="Date of Examination" value="Date of Examination" />
                                                            <label htmlFor="DateExamination">Date of Examination</label>
                                                        </div>
                                                    </div>
                                                    <div className='form-compact ornage-line box-shoadow mb-4'>
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control" id="Quantitative" placeholder="Quantitative" value="Quantitative" />
                                                            <label htmlFor="Quantitative">Quantitative</label>
                                                        </div>
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control" id="Verbal" placeholder="Verbal" value="Verbal" />
                                                            <label htmlFor="Verbal">Verbal</label>
                                                        </div>
                                                    </div>
                                                    <div className="form-floating ornage-line box-shoadow mb-4">
                                                        <input type="text" className="form-control" id="AnalyticalWriting" placeholder="Analytical Writing" value="Analytical Writing" />
                                                        <label htmlFor="AnalyticalWriting">Analytical Writing</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='test-sublist'>
                                                <div className='test-sublist-top'>
                                                    <h4>SAT</h4>
                                                    <div className='additional'>
                                                        <Link href="#" onClick={toggleEnglish}>+ Add Experience</Link>
                                                    </div>
                                                </div>
                                                <div className='test-sublist-btm' style={{ display: showMeEnglish ? "none" : "block" }}>
                                                    <div className='form-compact ornage-line box-shoadow mb-4'>
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control" id="OverallScore" placeholder="Overall Score" value="Overall Score" />
                                                            <label htmlFor="OverallScore">Overall Score</label>
                                                        </div>
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control" id="DateExamination" placeholder="Date of Examination" value="Date of Examination" />
                                                            <label htmlFor="DateExamination">Date of Examination</label>
                                                        </div>
                                                    </div>
                                                    <div className='form-compact ornage-line box-shoadow mb-4'>
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control" id="Quantitative" placeholder="Quantitative" value="Quantitative" />
                                                            <label htmlFor="Quantitative">Quantitative</label>
                                                        </div>
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control" id="Verbal" placeholder="Verbal" value="Verbal" />
                                                            <label htmlFor="Verbal">Verbal</label>
                                                        </div>
                                                    </div>
                                                    <div className="form-floating ornage-line box-shoadow mb-4">
                                                        <input type="text" className="form-control" id="AnalyticalWriting" placeholder="Analytical Writing" value="Analytical Writing" />
                                                        <label htmlFor="AnalyticalWriting">Analytical Writing</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </TabPanel>
                        </Tabs>
                        <div className="submit-area text-center">
                            <button className="btn btn-blue btn-big">+ Upload New Document</button>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ProfileModal;