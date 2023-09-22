import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const About = (props) => {

    var advisors = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        dots: false,
        arrow: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 0,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    initialSlide: 0,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    arrows: false,
                    dots: true
                }
            }
        ]
    };


    return (
        <>

            <section className="banner banner-inner">
                <div className="cover">
                    <div className="container">
                        <div className="banner-content">
                            <h1>About Us</h1>
                            <p>Donec ac nulla dapibus metus consequat efficitur.</p>
                        </div>
                    </div>
                </div>
                <Image src="/assets/images/banner-about.jpg" alt="Panache" width={1900} height={484} priority={true} />
            </section>


            <section className="about-sec-1">
                <div className="container sc-pd-tp-8 sc-pd-bm-8">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about-sec-1-img">
                                <Image src="/assets/images/our-mission.jpg" alt="Panache" width={528} height={397} priority={true} cl />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-sec-1-con">
                                <h3>Our Mission</h3>
                                <p>Vestibulum aliquam finibus cursus. Praesent congue porttitor nunc vel pulvinar. Cras congue congue conngue congue condiment dimentum.</p>
                                <p>Aliquam at lobortis lorem, non fringilla lectus. Cras porta sollicitudin ipsum, sed volutpat ante tristique at. Vivamus faucibus pretium nulla. Duis quis ornare orci. Vestibulum aliquam finibus cursus. Praesent congue</p>
                                <Link href="/" className="btn btn-blue"><span>Register yourself</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="our-advisors sc-pd-tp-8 sc-pd-bm-8">
                <div className="container">

                    <div className="advisors-sec-top text-center">
                        <h3>Our Advisors</h3>
                    </div>

                    <div className="advisors-sec-slider slider-arrows">
                        <Slider {...advisors}>
                            <div className="advisors-sec-item">
                                <div className="img-elmnt">
                                    <figure><Image src="/assets/images/advisors-1.jpg" alt="Visa" width={234} height={240} priority={true} /></figure>
                                </div>
                                <div className="info-elmnt">
                                    <h5>John Doe</h5>
                                    <p>Advisor, India</p>
                                </div>
                            </div>
                            <div className="advisors-sec-item">
                                <div className="img-elmnt">
                                    <figure><Image src="/assets/images/advisors-2.jpg" alt="Visa" width={234} height={240} priority={true} /></figure>
                                </div>
                                <div className="info-elmnt">
                                    <h5>James Patty</h5>
                                    <p>Board Member</p>
                                </div>
                            </div>
                            <div className="advisors-sec-item">
                                <div className="img-elmnt">
                                    <figure><Image src="/assets/images/advisors-3.jpg" alt="Visa" width={234} height={240} priority={true} /></figure>
                                </div>
                                <div className="info-elmnt">
                                    <h5>Fillips Luke</h5>
                                    <p>Head of Sales</p>
                                </div>
                            </div>

                            <div className="advisors-sec-item">
                                <div className="img-elmnt">
                                    <figure><Image src="/assets/images/advisors-4.jpg" alt="Visa" width={234} height={240} priority={true} /></figure>
                                </div>
                                <div className="info-elmnt">
                                    <h5>Alley Mathun</h5>
                                    <p>Board Member</p>
                                </div>
                            </div>
                            <div className="advisors-sec-item">
                                <div className="img-elmnt">
                                    <figure><Image src="/assets/images/advisors-1.jpg" alt="Visa" width={234} height={240} priority={true} /></figure>
                                </div>
                                <div className="info-elmnt">
                                    <h5>John Doe</h5>
                                    <p>Advisor, India</p>
                                </div>
                            </div>
                            <div className="advisors-sec-item">
                                <div className="img-elmnt">
                                    <figure><Image src="/assets/images/advisors-2.jpg" alt="Visa" width={234} height={240} priority={true} /></figure>
                                </div>
                                <div className="info-elmnt">
                                    <h5>James Patty</h5>
                                    <p>Board Member</p>
                                </div>
                            </div>
                            <div className="advisors-sec-item">
                                <div className="img-elmnt">
                                    <figure><Image src="/assets/images/advisors-3.jpg" alt="Visa" width={234} height={240} priority={true} /></figure>
                                </div>
                                <div className="info-elmnt">
                                    <h5>Fillips Luke</h5>
                                    <p>Head of Sales</p>
                                </div>
                            </div>

                            <div className="advisors-sec-item">
                                <div className="img-elmnt">
                                    <figure><Image src="/assets/images/advisors-4.jpg" alt="Visa" width={234} height={240} priority={true} /></figure>
                                </div>
                                <div className="info-elmnt">
                                    <h5>Alley Mathun</h5>
                                    <p>Board Member</p>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </section>



            <section className="our-vission sc-pd-tp-8 sc-pd-bm-8">
                <div className="container">
                    <div className="our-vission-sec  sc-pd-tp-5 sc-pd-bm-5">
                        <div className="our-vission-con text-center">
                            <h3>Our Vision</h3>
                            <p>Vestibulum aliquam finibus cursus. Praesent congue porttitor nunc vel pulvinar. Cras congue congue condimentum. Sed diam libero, blandit a ornare vitae, semper id lorem. Etiam arcu nisl, rhoncus vitae ante non, accumsan aliquamVestibulum aliquam finibus cursus. Praesent congue porttitor nunc vel pulvinar. Cras congue congue condimentum. Sed dia semper id lorem. Etiam arcu nisl, rhoncus vitae ante non, accumsan aliquam.</p>
                        </div>
                        <div className="row our-vission-mid">
                            <div className="col-md-6">
                                <ul className="list-style-1">
                                    <li>Vestibulum ante ipsum primis in faucibus orci</li>
                                    <li>Luctus et ultrices posuere cubilia curae</li>
                                    <li>Quisque faucibus nunc justo, in consequat massa</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul className="list-style-1">
                                    <li>Vestibulum ante ipsum primis in faucibus orci</li>
                                    <li>Luctus et ultrices posuere cubilia curae</li>
                                    <li>Quisque faucibus nunc justo, in consequat massa</li>
                                </ul>
                            </div>
                        </div>
                        <div className="our-vission-btm text-center">
                            <Link href="/" className="btn btn-blue"><span>Download App</span></Link>
                        </div>
                    </div>
                </div>
            </section>


           
            <section className="board-members sc-pd-tp-8 sc-pd-bm-8">
                <div className="container">

                    <div className="board-sec-top text-center">
                        <h3>Board of Members</h3>
                    </div>

                    <div className="board-sec-slider slider-arrows">
                        <Slider {...advisors}>
                            <div className="board-sec-item">
                                <div className="img-elmnt">
                                    <figure><Image src="/assets/images/member-1.jpg" alt="Visa" width={234} height={240} priority={true} /></figure>
                                </div>
                                <div className="info-elmnt">
                                    <h5>John Doe</h5>
                                </div>
                            </div>
                            <div className="board-sec-item">
                                <div className="img-elmnt">
                                    <figure><Image src="/assets/images/member-2.jpg" alt="Visa" width={234} height={240} priority={true} /></figure>
                                </div>
                                <div className="info-elmnt">
                                    <h5>James Patty</h5>
                                </div>
                            </div>
                            <div className="board-sec-item">
                                <div className="img-elmnt">
                                    <figure><Image src="/assets/images/member-3.jpg" alt="Visa" width={234} height={240} priority={true} /></figure>
                                </div>
                                <div className="info-elmnt">
                                    <h5>Fillips Luke</h5>
                                </div>
                            </div>

                            <div className="board-sec-item">
                                <div className="img-elmnt">
                                    <figure><Image src="/assets/images/member-4.jpg" alt="Visa" width={234} height={240} priority={true} /></figure>
                                </div>
                                <div className="info-elmnt">
                                    <h5>Alley Mathun</h5>
                                </div>
                            </div>
                            <div className="board-sec-item">
                                <div className="img-elmnt">
                                    <figure><Image src="/assets/images/member-1.jpg" alt="Visa" width={234} height={240} priority={true} /></figure>
                                </div>
                                <div className="info-elmnt">
                                    <h5>John Doe</h5>
                                </div>
                            </div>
                            <div className="board-sec-item">
                                <div className="img-elmnt">
                                    <figure><Image src="/assets/images/member-2.jpg" alt="Visa" width={234} height={240} priority={true} /></figure>
                                </div>
                                <div className="info-elmnt">
                                    <h5>James Patty</h5>
                                </div>
                            </div>
                            <div className="board-sec-item">
                                <div className="img-elmnt">
                                    <figure><Image src="/assets/images/member-3.jpg" alt="Visa" width={234} height={240} priority={true} /></figure>
                                </div>
                                <div className="info-elmnt">
                                    <h5>Fillips Luke</h5>
                                </div>
                            </div>

                            <div className="board-sec-item">
                                <div className="img-elmnt">
                                    <figure><Image src="/assets/images/member-4.jpg" alt="Visa" width={234} height={240} priority={true} /></figure>
                                </div>
                                <div className="info-elmnt">
                                    <h5>Alley Mathun</h5>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>


  
            <section className="our-values">
                <div className="container">
                    <div className="our-values-con sc-pd-tp-8 sc-pd-bm-8">
                        <h3 className="text-center">Our Values</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="our-values-sec">
                                    <div className="img-elmnt">
                                        <figure><Image src="/assets/images/transparency.svg" alt="Transparency" width={61} height={610} priority={true} /></figure>
                                        <h5>Transparency</h5>
                                    </div>
                                    <div className="info-elmnt">
                                        <p>Vestibulum aliquam finibus cursus. Praesent congue porttitor nunc vel pulvinar. Cras congue congue condimentum. Sed diam libero, blandit a ornare vitae, semper id lorem.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="our-values-sec">
                                    <div className="img-elmnt">
                                        <figure><Image src="/assets/images/trust.svg" alt="Trust" width={61} height={610} priority={true} /></figure>
                                        <h5>Trust</h5>
                                    </div>
                                    <div className="info-elmnt">
                                        <p>Vestibulum aliquam finibus cursus. Praesent congue porttitor nunc vel pulvinar. Cras congue congue condimentum. Sed diam libero, blandit a ornare vitae, semper id lorem.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="our-values-sec">
                                    <div className="img-elmnt">
                                        <figure><Image src="/assets/images/opportunity.svg" alt="Opportunity for all" width={61} height={610} priority={true} /></figure>
                                        <h5>Opportunity for all</h5>
                                    </div>
                                    <div className="info-elmnt">
                                        <p>Vestibulum aliquam finibus cursus. Praesent congue porttitor nunc vel pulvinar. Cras congue congue condimentum. Sed diam libero, blandit a ornare vitae, semper id lorem.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="our-values-sec">
                                    <div className="img-elmnt">
                                        <figure><Image src="/assets/images/success.svg" alt="Shared success" width={61} height={610} priority={true} /></figure>
                                        <h5>Shared Success</h5>
                                    </div>
                                    <div className="info-elmnt">
                                        <p>Vestibulum aliquam finibus cursus. Praesent congue porttitor nunc vel pulvinar. Cras congue congue condimentum. Sed diam libero, blandit a ornare vitae, semper id lorem.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About;