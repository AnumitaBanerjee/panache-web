import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import StickyBox from "react-sticky-box";
import RangeSlider from 'react-bootstrap-range-slider';

const Programs = (props) => {

    const [value, setValue] = React.useState(4000);
    const [value1, setValue1] = React.useState(500);

    return (
        <>
            <section className="banner banner-inner">
                <div className="cover">
                    <div className="container">
                        <div className="banner-content">
                            <h1>Programs</h1>
                            <p>We'll help you find your best suited program</p>
                        </div>
                    </div>
                </div>
                <Image 
                    src="/assets/images/banner-programme.jpg" 
                    alt="Panache" 
                    width={1900} 
                    height={484} 
                    priority={true} 
                />
            </section>


            {/* Programs Tab */}
            <section className="programs-tab-sec">
                <div className="container sc-pd-bm-5">
                    <div className="switches-container">
                        <input type="radio" id="switchPrograms" name="switchPlan" value="Programs" defaultChecked="checked" />
                        <input type="radio" id="switchInstitutes" name="switchPlan" value="Institutes" />
                        <label htmlFor="switchPrograms">Programs</label>
                        <label htmlFor="switchInstitutes">Institutes</label>
                        <div className="switch-wrapper">
                            <div className="switch">
                                <div>Programs</div>
                                <div>Institutes</div>
                            </div>
                        </div>
                    </div>
                    <div className="serach-panel">
                        <form className="search-form">
                            <div className="form-group">
                                <input type="text" className="form-control" id="inputtext" aria-describedby="inputtext" placeholder="Search" />
                                <button type="submit" className="btn btn-blue">Search</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>


            {/* Programs Details */}
            <section className="programs-details-sec">
                <div className="container sc-pd-tp-5 sc-pd-bm-5">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="right-fliter-area">
                                <div className="sticky-top"><span className="italic">Filter Programs</span> <button type="button" class="ant-btn">Reset</button></div>
                                <div className="fliter-form">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="inputtext">Country</label>
                                            <select className="form-control">
                                                <option>Select Country</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputtext">State</label>
                                            <select className="form-control">
                                                <option>Select State</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputtext">Institution Type</label>
                                            <select className="form-control">
                                                <option>Select Institution Type</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputtext">Institution</label>
                                            <select className="form-control">
                                                <option>Select Institution</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputtext">Is PGWP Available?</label>
                                            <select className="form-control">
                                                <option>Select PGWP</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputtext">Program Type</label>
                                            <select className="form-control">
                                                <option>Select Program Type</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputtext">Intake</label>
                                            <select className="form-control">
                                                <option>Select Intake</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputtext">Duration</label>
                                            <select className="form-control">
                                                <option>Select Duration</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputtext">English Test Type</label>
                                            <select className="form-control">
                                                <option>Select English Test Type</option>
                                            </select>
                                        </div>
                                        <div className="range-group form-group">
                                            <label htmlFor="inputtext">Tuition Fee</label>
                                            <div className='range-group-in'>
                                                <div className='num1'>400</div>
                                                <div className='num1'>400000</div>
                                            </div>
                                            <RangeSlider
                                                value={value}
                                                onChange={e => setValue(e.target.value)}
                                            />
                                        </div>

                                        <div className="range-group form-group">
                                            <label htmlFor="inputtext">Application Fee</label>
                                            <div className='range-group-in'>
                                                <div className='num1'>0</div>
                                                <div className='num1'>1000</div>
                                            </div>
                                            <RangeSlider
                                                value={value1}
                                                onChange={e => setValue1(e.target.value)}
                                            />
                                        </div>

                                        <button type="submit" className="btn btn-blue w-100">Apply Filter</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-9">
                            <div className='search-reult-top'>
                                <h5>FILTER PROGRAM BY ALPHABET:</h5>
                                <button type="button" className="ant-btn">Reset</button>
                            </div>
                            <div className='search-by-alpahbed'>
                                <div className="main-al-area"><span className="single-al-area active"><span>A</span></span><span className="single-al-area"><span>B</span></span><span className="single-al-area"><span>C</span></span><span className="single-al-area"><span>D</span></span><span className="single-al-area"><span>E</span></span><span className="single-al-area"><span>F</span></span><span className="single-al-area"><span>G</span></span><span className="single-al-area"><span>H</span></span><span className="single-al-area"><span>I</span></span><span className="single-al-area"><span>J</span></span><span className="single-al-area"><span>K</span></span><span className="single-al-area"><span>L</span></span><span className="single-al-area"><span>M</span></span><span className="single-al-area"><span>N</span></span><span className="single-al-area"><span>O</span></span><span className="single-al-area"><span>P</span></span><span className="single-al-area"><span>Q</span></span><span className="single-al-area"><span>R</span></span><span className="single-al-area"><span>S</span></span><span className="single-al-area"><span>T</span></span><span className="single-al-area"><span>U</span></span><span className="single-al-area"><span>V</span></span><span className="single-al-area"><span>W</span></span><span className="single-al-area"><span>X</span></span><span className="single-al-area"><span>Y</span></span><span className="single-al-area"><span>Z</span></span></div>
                            </div>
                            <div className='search-result'>

                                <div className="search-in">
                                    <div className="search-in-top">
                                        <div className="search-in-top-l">
                                            <div className="pro-imge"> <Image src="/assets/images/study.jpg" alt="Panache" width={56} height={53} priority={true} /></div>
                                            <div className="pro-con">
                                                <div className="pro-con-h">B.S. in Health Services Administration -2 Term</div>
                                                <div className="pro-con-d">University of Central Florida (United States)</div>
                                            </div>
                                        </div>
                                        <div className="search-in-top-r">
                                            <button type="button" className="btn btn-blue">Apply</button>
                                        </div>
                                    </div>
                                    <div className="search-in-btm">
                                        <div className="search-in-btm-col selct"> <span className="text-top">Intake</span> <span className="text-tbtm">Sep, Jan</span>
                                        </div>
                                        <div className="search-in-btm-col"> <span className="text-top">Duration</span> <span className="text-tbtm">48 Months</span> </div>
                                        <div className="search-in-btm-col"> <span className="text-top">Tuition Fee</span> <span className="text-tbtm">$22440</span> </div>
                                        <div className="search-in-btm-col"> <span className="text-top">Application Fee</span> <span className="text-tbtm">$30</span> </div>
                                        <div className="search-in-btm-col green"> <span className="text-top">Open Intakes</span> <span className="text-tbtm">Sep, 2023 (Open)</span> </div>
                                    </div>
                                </div>

                                <div className="search-in">
                                    <div className="search-in-top">
                                        <div className="search-in-top-l">
                                            <div className="pro-imge"> <Image src="/assets/images/study.jpg" alt="Panache" width={56} height={53} priority={true} /></div>
                                            <div className="pro-con">
                                                <div className="pro-con-h">M.S. in Bioinformatics and Computational Biology, Pathway - 1 Semester</div>
                                                <div className="pro-con-d">University of Central Florida (United States)</div>
                                            </div>
                                        </div>
                                        <div className="search-in-top-r">
                                            <button type="button" className="btn btn-blue">Apply</button>
                                        </div>
                                    </div>
                                    <div className="search-in-btm">
                                        <div className="search-in-btm-col selct"> <span className="text-top">Intake</span> <span className="text-tbtm">Sep, Jan</span>
                                        </div>
                                        <div className="search-in-btm-col"> <span className="text-top">Duration</span> <span className="text-tbtm">48 Months</span> </div>
                                        <div className="search-in-btm-col"> <span className="text-top">Tuition Fee</span> <span className="text-tbtm">$22440</span> </div>
                                        <div className="search-in-btm-col"> <span className="text-top">Application Fee</span> <span className="text-tbtm">$30</span> </div>
                                        <div className="search-in-btm-col green"> <span className="text-top">Open Intakes</span> <span className="text-tbtm">Sep, 2023 (Open)</span> </div>
                                    </div>
                                </div>


                                <div className="search-in">
                                    <div className="search-in-top">
                                        <div className="search-in-top-l">
                                            <div className="pro-imge"> <Image src="/assets/images/study.jpg" alt="Panache" width={56} height={53} priority={true} /></div>
                                            <div className="pro-con">
                                                <div className="pro-con-h">B.A. in Film and Digital Media, International Year - Pathway - 1 Semester</div>
                                                <div className="pro-con-d">University of Central Florida (United States)</div>
                                            </div>
                                        </div>
                                        <div className="search-in-top-r">
                                            <button type="button" className="btn btn-blue">Apply</button>
                                        </div>
                                    </div>
                                    <div className="search-in-btm">
                                        <div className="search-in-btm-col selct"> <span className="text-top">Intake</span> <span className="text-tbtm">Sep, Jan</span>
                                        </div>
                                        <div className="search-in-btm-col"> <span className="text-top">Duration</span> <span className="text-tbtm">48 Months</span> </div>
                                        <div className="search-in-btm-col"> <span className="text-top">Tuition Fee</span> <span className="text-tbtm">$22440</span> </div>
                                        <div className="search-in-btm-col"> <span className="text-top">Application Fee</span> <span className="text-tbtm">$30</span> </div>
                                        <div className="search-in-btm-col green"> <span className="text-top">Open Intakes</span> <span className="text-tbtm">Sep, 2023 (Open)</span> </div>
                                    </div>
                                </div>


                                <div className="search-in">
                                    <div className="search-in-top">
                                        <div className="search-in-top-l">
                                            <div className="pro-imge"> <Image src="/assets/images/study.jpg" alt="Panache" width={56} height={53} priority={true} /></div>
                                            <div className="pro-con">
                                                <div className="pro-con-h">B.S. in Biology</div>
                                                <div className="pro-con-d">University of Central Florida (United States)</div>
                                            </div>
                                        </div>
                                        <div className="search-in-top-r">
                                            <button type="button" className="btn btn-blue">Apply</button>
                                        </div>
                                    </div>
                                    <div className="search-in-btm">
                                        <div className="search-in-btm-col selct"> <span className="text-top">Intake</span> <span className="text-tbtm">Sep, Jan</span>
                                        </div>
                                        <div className="search-in-btm-col"> <span className="text-top">Duration</span> <span className="text-tbtm">48 Months</span> </div>
                                        <div className="search-in-btm-col"> <span className="text-top">Tuition Fee</span> <span className="text-tbtm">$22440</span> </div>
                                        <div className="search-in-btm-col"> <span className="text-top">Application Fee</span> <span className="text-tbtm">$30</span> </div>
                                        <div className="search-in-btm-col green"> <span className="text-top">Open Intakes</span> <span className="text-tbtm">Sep, 2023 (Open)</span> </div>
                                    </div>
                                </div>


                                <div className="search-in">
                                    <div className="search-in-top">
                                        <div className="search-in-top-l">
                                            <div className="pro-imge"> <Image src="/assets/images/study.jpg" alt="Panache" width={56} height={53} priority={true} /></div>
                                            <div className="pro-con">
                                                <div className="pro-con-h">B.S. in Health Services Administration -2 Term</div>
                                                <div className="pro-con-d">University of Central Florida (United States)</div>
                                            </div>
                                        </div>
                                        <div className="search-in-top-r">
                                            <button type="button" className="btn btn-blue">Apply</button>
                                        </div>
                                    </div>
                                    <div className="search-in-btm">
                                        <div className="search-in-btm-col selct"> <span className="text-top">Intake</span> <span className="text-tbtm">Sep, Jan</span>
                                        </div>
                                        <div className="search-in-btm-col"> <span className="text-top">Duration</span> <span className="text-tbtm">48 Months</span> </div>
                                        <div className="search-in-btm-col"> <span className="text-top">Tuition Fee</span> <span className="text-tbtm">$22440</span> </div>
                                        <div className="search-in-btm-col"> <span className="text-top">Application Fee</span> <span className="text-tbtm">$30</span> </div>
                                        <div className="search-in-btm-col green"> <span className="text-top">Open Intakes</span> <span className="text-tbtm">Sep, 2023 (Open)</span> </div>
                                    </div>
                                </div>

                                <div className="search-in">
                                    <div className="search-in-top">
                                        <div className="search-in-top-l">
                                            <div className="pro-imge"> <Image src="/assets/images/study.jpg" alt="Panache" width={56} height={53} priority={true} /></div>
                                            <div className="pro-con">
                                                <div className="pro-con-h">M.S. in Bioinformatics and Computational Biology, Pathway - 1 Semester</div>
                                                <div className="pro-con-d">University of Central Florida (United States)</div>
                                            </div>
                                        </div>
                                        <div className="search-in-top-r">
                                            <button type="button" className="btn btn-blue">Apply</button>
                                        </div>
                                    </div>
                                    <div className="search-in-btm">
                                        <div className="search-in-btm-col selct"> <span className="text-top">Intake</span> <span className="text-tbtm">Sep, Jan</span>
                                        </div>
                                        <div className="search-in-btm-col"> <span className="text-top">Duration</span> <span className="text-tbtm">48 Months</span> </div>
                                        <div className="search-in-btm-col"> <span className="text-top">Tuition Fee</span> <span className="text-tbtm">$22440</span> </div>
                                        <div className="search-in-btm-col"> <span className="text-top">Application Fee</span> <span className="text-tbtm">$30</span> </div>
                                        <div className="search-in-btm-col green"> <span className="text-top">Open Intakes</span> <span className="text-tbtm">Sep, 2023 (Open)</span> </div>
                                    </div>
                                </div>


                                <div className="search-in">
                                    <div className="search-in-top">
                                        <div className="search-in-top-l">
                                            <div className="pro-imge"> <Image src="/assets/images/study.jpg" alt="Panache" width={56} height={53} priority={true} /></div>
                                            <div className="pro-con">
                                                <div className="pro-con-h">B.A. in Film and Digital Media, International Year - Pathway - 1 Semester</div>
                                                <div className="pro-con-d">University of Central Florida (United States)</div>
                                            </div>
                                        </div>
                                        <div className="search-in-top-r">
                                            <button type="button" className="btn btn-blue">Apply</button>
                                        </div>
                                    </div>
                                    <div className="search-in-btm">
                                        <div className="search-in-btm-col selct"> <span className="text-top">Intake</span> <span className="text-tbtm">Sep, Jan</span>
                                        </div>
                                        <div className="search-in-btm-col"> <span className="text-top">Duration</span> <span className="text-tbtm">48 Months</span> </div>
                                        <div className="search-in-btm-col"> <span className="text-top">Tuition Fee</span> <span className="text-tbtm">$22440</span> </div>
                                        <div className="search-in-btm-col"> <span className="text-top">Application Fee</span> <span className="text-tbtm">$30</span> </div>
                                        <div className="search-in-btm-col green"> <span className="text-top">Open Intakes</span> <span className="text-tbtm">Sep, 2023 (Open)</span> </div>
                                    </div>
                                </div>


                                <div className="search-in">
                                    <div className="search-in-top">
                                        <div className="search-in-top-l">
                                            <div className="pro-imge"> <Image src="/assets/images/study.jpg" alt="Panache" width={56} height={53} priority={true} /></div>
                                            <div className="pro-con">
                                                <div className="pro-con-h">B.S. in Biology</div>
                                                <div className="pro-con-d">University of Central Florida (United States)</div>
                                            </div>
                                        </div>
                                        <div className="search-in-top-r">
                                            <button type="button" className="btn btn-blue">Apply</button>
                                        </div>
                                    </div>
                                    <div className="search-in-btm">
                                        <div className="search-in-btm-col selct"> <span className="text-top">Intake</span> <span className="text-tbtm">Sep, Jan</span>
                                        </div>
                                        <div className="search-in-btm-col"> <span className="text-top">Duration</span> <span className="text-tbtm">48 Months</span> </div>
                                        <div className="search-in-btm-col"> <span className="text-top">Tuition Fee</span> <span className="text-tbtm">$22440</span> </div>
                                        <div className="search-in-btm-col"> <span className="text-top">Application Fee</span> <span className="text-tbtm">$30</span> </div>
                                        <div className="search-in-btm-col green"> <span className="text-top">Open Intakes</span> <span className="text-tbtm">Sep, 2023 (Open)</span> </div>
                                    </div>
                                </div>


                                {/* <ul className="pagination">
                                    <li><Link href="/" className="prev"></Link></li>
                                    <li><Link href="/" className="active">1</Link></li>
                                    <li><Link href="/">2</Link></li>
                                    <li><Link href="/">3</Link></li>
                                    <li><Link href="/" className="next"></Link></li>
                                </ul> */}


                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Programs;