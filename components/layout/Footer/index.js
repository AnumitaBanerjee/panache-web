import React from "react";
import Image from "next/image";
import Link from "next/link";
import Modal from 'react-modal';
import { Form, Formik, Field } from 'formik';
import swal from "sweetalert";
import * as yup from "yup";
import axiosInstance from "../../../src/axios";

const Footer = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const openModal = () => {
        setIsOpen(true);
    }
    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        //subtitle.style.color = '#f00';
    }
    const closeModal = () => {
        setIsOpen(false);
    }
    const enquirySubmitHandler = async(values) => {
        await axiosInstance.post(`${process.env.NEXT_PUBLIC_API_URL}/enquiry`, values)
            .then((res) => {
                if (res.responseCode === 200) {
                    swal("Success", res.responseMsg, "success");
                }
                if (res.responseCode === 201) {
                    swal("Error", res.responseMsg, "error");
                }
            })
            .catch((error) => {
                swal("Error", error.message, "error");
                console.log(error);
            }
        );
    };

    return (
        <>
            <footer className="main-footer">
                <div className='footer-top'>
                    <div className='container'>
                        <div className='row'>
                            <div className='footer-col col-md-6'>
                                <div className="logo">
                                    <Link href="/">
                                        <Image
                                            src="/assets/images/footer-logo.svg"
                                            alt="Panache"
                                            width={168}
                                            height={100}
                                            priority={true}
                                        />
                                    </Link>
                                </div>
                                <div className="footer_des">
                                    <p>Aliquam at lobortis lorem, non fringilla lectus. Cras porta sollicitudin ipsum primis in faucibus orci luctus et dolor set do.</p>
                                </div>
                                <div className="play-store">
                                    <Link href="/">
                                        <Image
                                            src="/assets/images/gogle-play.png"
                                            alt="Panache"
                                            width={176}
                                            height={52}
                                            priority={true}
                                        />
                                    </Link>
                                    <Link href="/">
                                        <Image
                                            src="/assets/images/app-store.png"
                                            alt="Panache"
                                            width={172}
                                            height={52}
                                            priority={true}
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className='footer-col col-md-2'>
                                <h6>Services</h6>
                                <nav className="footer-navigation">
                                    <ul>
                                        <li><Link href="/">Curabitur quis</Link></li>
                                        <li><Link href="/">Lorem scelerisque</Link></li>
                                        <li><Link href="/">Urna pulvinar</Link></li>
                                        <li><Link href="/">Curabitur fringilla</Link></li>
                                        <li><Link href="/">Velit vitae interdum</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className='footer-col col-md-2'>
                                <h6>Company</h6>
                                <nav className="footer-navigation">
                                    <ul>
                                        <li><Link href="/">Programs</Link></li>
                                        <li><Link href="/">About us</Link></li>
                                        <li><Link href="/">Testimonials</Link></li>
                                        <li><Link href="/">Contact</Link></li>
                                        <li><Link href="/">Blog</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className='footer-col col-md-2'>
                                <h6>Others</h6>
                                <nav className="footer-navigation">
                                    <ul>
                                        <li><Link href="/">Ethical Guidelines</Link></li>
                                        <li><Link href="/">Terms Of Use</Link></li>
                                        <li><Link href="/">Privacy Statement</Link></li>
                                        <li><Link href="/">Cookie Policy</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-copyright'>
                    <div className='container d-md-flex justify-content-md-between'>
                        <p>Copyright © 2023 Abroad uni network. All rights reserved</p>
                        <ul className='social-media'>
                            <li className='mx-2'>
                                <Link href="#">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </Link>
                            </li>
                            <li className='mx-2'>
                                <Link href="#">
                                    <i className="fa-brands fa-instagram"></i>
                                </Link>
                            </li>
                            <li className='mx-2'>
                                <Link href="#">
                                    <i className="fa-brands fa-pinterest"></i>
                                </Link>
                            </li>
                            <li className='mx-2'>
                                <Link href="#">
                                    <i className="fa-brands fa-youtube"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>

            {/* Enquire Modal Start */}
            <div className="enquire-modal">
                <button
                    onClick={openModal}
                    className="enquire-btn btn btn-black">Enquire Now
                </button>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    ariaHideApp={false}
                    contentLabel="Enquire Now"
                    className="enquiry-modal"
                >
                    <h4>Enquire Now</h4>
                    <button onClick={closeModal}>x</button>
                    <Formik
                        initialValues={{
                            fname: '',
                            lname: '',
                            email: '',
                            mobile: '',
                            description_dtl: ''
                        }}

                        validationSchema={
                            yup.object().shape({
                                fname: yup
                                    .string()
                                    .max(15, 'fname not more than 15 characters long')
                                    .required("First name is Required"),
                                lname: yup
                                    .string()
                                    .max(15, 'lname not more than 15 characters long')
                                    .required("Last name is Required"),
                                email: yup
                                    .string()
                                    .email("Please enter a valid email")
                                    .required("email is required"),
                                mobile: yup
                                    .string()
                                    .max(10, 'mobile not more than 10 digit long')
                                    .required("Mobile is Required"),
                                description_dtl: yup
                                    .string()
                                    .max(150, 'description details not more than 150 characters long')
                                    .required("Description details is Required"),
                            })
                        }
                        onSubmit={(values, { resetForm }) => {
                            enquirySubmitHandler(values);
                            resetForm({ values: '' });
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <div className="form-group">
                                    <Field
                                        type="text"
                                        className="form-control"
                                        name="fname"
                                        id="inputtext"
                                        aria-describedby="inputtext"
                                        placeholder="Enter First Name"
                                    />
                                    {touched.fname && errors.fname && 
                                        <div className="form-error">{errors.fname}</div>
                                    }
                                </div>
                                <div className="form-group">
                                    <Field
                                        type="text"
                                        className="form-control"
                                        name="lname"
                                        id="inputtext"
                                        aria-describedby="inputtext"
                                        placeholder="Enter Last Name"
                                    />
                                    {touched.lname && errors.lname && 
                                        <div className="form-error">{errors.lname}</div>
                                    }
                                </div>
                                <div className="form-group">
                                    <Field
                                        type="tel"
                                        className="form-control"
                                        name="mobile"
                                        id="inputPhone"
                                        aria-describedby="inputPhone"
                                        placeholder="Enter Phone"
                                    />
                                    {touched.mobile && errors.mobile && <div className="form-error">{errors.mobile}</div>}
                                </div>
                                <div className="form-group">
                                    <Field
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="inputEmail"
                                        aria-describedby="inputEmail"
                                        placeholder="Enter Email"
                                    />
                                    {touched.email && errors.email && 
                                        <div className="form-error">{errors.email}</div>
                                    }
                                </div>
                                <div className="form-group">
                                    <Field
                                        type="text"
                                        className="form-control"
                                        name="description_dtl"
                                        id="inputMessage"
                                        aria-describedby="inputMessage"
                                        placeholder="Enter Message"
                                    />
                                    {touched.description_dtl && errors.description_dtl && 
                                        <div className="form-error">{errors.description_dtl}</div>
                                    }
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-blue">Submit
                                </button>
                            </Form>
                        )}
                    </Formik>
                </Modal>
            </div>
            {/* Enquire Modal End */}
        </>
    )
}

export default Footer;