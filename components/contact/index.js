import React from "react";
import Image from "next/image";
import Link from "next/link";


const Contact = (props) => {
    return (
        <>
          
            <section className="banner banner-inner">
                <div className="cover">
                    <div className="container">
                        <div className="banner-content">
                            <h1>Contact</h1>
                            <p>Donec ac nulla dapibus metus consequat efficitur.</p>
                        </div>
                    </div>
                </div>
                <Image src="/assets/images/banner-contact.jpg" alt="Panache" width={1900} height={484} priority={true} />
            </section>

            <section className="contact-sec-1">
                <div className="container sc-pd-tp-8 sc-pd-bm-8">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact-sec-1-con">
                                <h3>Speak With Our Consultant</h3>
                                <h5>Panache Immigration & Education Consultant Pvt Ltd</h5>
                                <ul>
                                    <li>
                                        <figure><Image src="/assets/images/location-icon.svg" alt="location" width={35} height={40} priority={true} /></figure>
                                        <div>
                                            <p>3rd Floor, Vasal Mall, Opp Hotel President, Jalandhar, <br /> Punjab, 144003, INDIA.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <figure><Image src="/assets/images/mobile-icon.svg" alt="mobile" width={35} height={40} priority={true} /></figure>
                                        <div>
                                            <p>Mobile  <Link href="tel:+91918566077128" className="link">+91 91 8566077128</Link></p>
                                            <p>Office  <Link href="tel:+9101814673999" className="link">+91 (0181)-4673999</Link></p>
                                        </div>
                                    </li>
                                    <li>
                                        <figure><Image src="/assets/images/email-icon.svg" alt="email" width={32} height={22} priority={true} /></figure>
                                        <div>
                                            <Link href="mailto:info@panache-education.com" className="link">info@panache-education.com</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-sec-1-img">
                                <Image src="/assets/images/contact-us.jpg" alt="Panache" width={516} height={421} priority={true} cl />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact with us */}
            <section className="home-sec-3 sc-pd-tp-6 sc-pd-bm-6">
                <div className="container">
                    <div className="home-sec-3-form">
                        <h5>Contact with us</h5>
                        <div className="home-sec-form-panel">
                            <form>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="inputtext">Enter Name</label>
                                            <input type="text" className="form-control" id="inputtext" aria-describedby="inputtext" placeholder="Enter Name" />
                                            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="inputtext">Enter Email</label>
                                            <input type="email" className="form-control" id="inputtext" aria-describedby="inputtext" placeholder="Enter Email" />
                                            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="inputtext">Contact Number</label>
                                            <input type="tel" className="form-control" id="inputtext" aria-describedby="inputtext" placeholder="Contact Number" />
                                            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="inputtext">Which country you are from?*</label>
                                            <input type="text" className="form-control" id="inputtext" aria-describedby="inputtext" placeholder="Which country you are from?* " />
                                            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="inputtext">Enter City</label>
                                            <input type="text" className="form-control" id="inputtext" aria-describedby="inputtext" placeholder="Enter City" />
                                            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="inputtext">Area of interest</label>
                                            <input type="text" className="form-control" id="inputtext" aria-describedby="inputtext" placeholder="Enter Area of interest" />
                                            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputArea">Message </label>
                                    <input type="text" className="form-control" id="inputArea" aria-describedby="inputArea" placeholder="Enter Area of interest" />
                                </div>
                                <button type="submit" className="btn btn-blue">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* View Larger Map */}
            <section className="map-area">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d436292.2199041774!2d75.591454!3d31.316651!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5bf04d847367%3A0x28dae545640b794e!2sVisa%20Times%20%26%20Immigration%20Services!5e0!3m2!1sen!2sus!4v1694511461506!5m2!1sen!2sus"></iframe>
            </section>
        </>
    )
}

export default Contact;