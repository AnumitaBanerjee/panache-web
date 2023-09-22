import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import CountUp from 'react-countup';

export default function Homepage() {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      }
    ]
  };

  var testimonials = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      }
    ]
  };


  var connected = {
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

  return <>

    {/* banner Start */}
    <section className="banner">
      <div className="cover">
        <div className="container">
          <div className="banner-content">
            <h1>Curabitur eu porttitor nisi at</h1>
            <p>Donec ac nulla dapibus metus consequat efficitur. Vivamus vestibulum laoreet ex, vel mollis tellus tempor.</p>
            <Link href="/" className="btn btn-orange"><span>Explore Programs</span></Link>
          </div>
        </div>
      </div>
      <Image 
        src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/banner-home.jpg`} 
        alt="Panache" 
        width={1900} 
        height={722} 
        priority={true} 
      />
    </section>

  {/* Counter */}
    <section className="counter-sec">
      <div className="container sc-pd-tp-5 sc-pd-bm-5">
        <div className="row counters">
          <div className="col-md-3">
            <div className="counter-box">
              <h2><span><CountUp end={100} separator="," /></span>+</h2>
              <p>Cras congue</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="counter-box">
              <h2><span><CountUp end={65000} separator="," /></span>+</h2>
              <p>Vestibulum ante</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="counter-box">
              <h2><span><CountUp end={48} separator="," /></span>Hrs</h2>
              <p>Donec nec conseq</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="counter-box">
              <h2>$<span><CountUp end={300} separator="," /></span></h2>
              <p>Blandit a ornare</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    {/* Home Section 1 */}
    <section className="home-sec-1">
      <div className="container sc-pd-tp-8">
        <div className="row">
          <div className="col-md-5">
            <div className="home-sec-1-img">
              <Image 
                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/objects.png`} 
                alt="Panache" 
                width={320} 
                height={595} 
                priority={true} 
              />
            </div>
          </div>
          <div className="col-md-7">
            <div className="home-sec-1-con">
              <h3>Maecenas pellen tesque sagittis erat, eu facilisis.</h3>
              <p>Aliquam at lobortis lorem, non fringilla lectus. Cras porta sollicitudin ipsum, sed volutpat ante tristique at. Vivamus faucibus pretium nulla. Duis quis ornare orci. Vestibulum aliquam finibus cursus. Praesent congue porttitor nunc vel pulvinar. Cras congue congue condimentum. Sed diam libero, blandit a ornare vitae, semper id lorem. Etiam arcu nisl, rhoncus vitae ante non, accumsan aliquam</p>
              <div className="play-store">
                <Link href="/">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/gogle-play.png`}
                    alt="Panache"
                    width={176}
                    height={52}
                    priority={true}
                  />
                </Link>
                <Link href="/">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/app-store.png`}
                    alt="Panache"
                    width={172}
                    height={52}
                    priority={true}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Home Section 2 */}
    <section className="home-sec-2">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="home-sec-2-con sc-pd-tp-8 sc-pd-bm-8">
              <h3>Vivamus vestibulum laoreet ex, vel mollis tellus tempor.</h3>
              <p>Vestibulum aliquam finibus cursus. Praesent congue porttitor nunc vel pulvinar. Cras congue congue condimentum. Sed diam libero, blandit a ornare vitae, semper id lorem. Etiam arcu nisl, rhoncus vitae ante non, accumsan aliquam</p>
              <ul className="list-style-1">
                <li>Vestibulum ante ipsum primis in faucibus orci</li>
                <li>Luctus et ultrices posuere cubilia curae</li>
                <li>Quisque faucibus nunc justo, in consequat massa</li>
              </ul>
              <Link href="/" className="btn btn-blue"><span>Register yourself</span></Link>
            </div>
          </div>
          <div className="col-md-5">
            <div className="home-sec-2-img">
              <Image 
                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/girl-img.jpg`}
                alt="Panache" 
                width={499} 
                height={692} 
                priority={true} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Home Section 3 */}
    <section className="home-sec-3 sc-pd-tp-6 sc-pd-bm-6">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="home-sec-3-con">
              <h3>Nam mattis tincidunt fermentum. In pellen tesque sapien elit</h3>
              <p>Praesent congue porttitor nunc vel pulvinar.</p>
              <Link href="/" className="btn btn-orange"><span>Switch To app</span></Link>
            </div>
          </div>
          <div className="col-md-5">
            <div className="home-sec-3-form">
              <h5>Fill up the form below to explore</h5>
              <div className="home-sec-form-panel">
                <form>
                  <div className="form-group">
                    <label htmlFor="inputtext">Enter Name</label>
                    <input type="text" className="form-control" id="inputtext" aria-describedby="inputtext" placeholder="Enter Name" />
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputQualification">Qualification</label>
                    <input type="text" className="form-control" id="inputQualification" aria-describedby="inputQualification" placeholder="Enter Qualification" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputArea">Area of interest</label>
                    <input type="text" className="form-control" id="inputArea" aria-describedby="inputArea" placeholder="Enter Area of interest" />
                  </div>
                  <button type="submit" className="btn btn-blue">Find Program</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Home Section 4*/}
    <section className="home-sec-4 sc-pd-tp-8 sc-pd-bm-8">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="home-sec-4-img">
              <Image 
                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/home-sec-4-img.png`}
                alt="Panache" 
                width={548} 
                height={530} 
                priority={true} 
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="home-sec-4-con">
              <h3>Cras vitae gravida erat, non vestibulum mi.</h3>
              <p>Aliquam at lobortis lorem, non fringilla lectus. Cras porta sollicitudin ipsum, sed volutpat ante tristique at. Vivamus faucibus pretium nulla. Duis quis ornare orci. Vestibulum aliquam finibus cursus. Praesent congue porttitor nunc vel pulvinar. Cras congue congue condimentum. Sed diam libero, blandit a ornare vitae, semper id lorem. Etiam arcu nisl, rhoncus vitae ante non, accumsan aliquam Vestibulum aliquam finibus cursus. Praesent congue porttitor nunc vel pulvinar. Cras congue congue condimentum. Sed diam libero, blandit a ornare vitae, semper id lorem.</p>
              <Link href="/" className="btn btn-blue"><span>Download App</span></Link>
            </div>
          </div>

        </div>
      </div>
    </section>


    <section className="home-trusted sc-pd-bm-5">
      <div className="container">
        <h5>TRUSTED ALL ACROSS THE GLOBE</h5>
        <div className="logo-ac">
          <ul>
            <li>
              <Image 
                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/lp-4.png`}
                alt="Panache" 
                width={183} 
                height={37} 
                priority={true} 
              />
            </li>
            <li>
              <Image 
                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/lp-1.png`}
                alt="Panache" 
                width={141} 
                height={50} 
                priority={true} 
              />
            </li>
            <li>
              <Image 
                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/lp-2.png`}
                alt="Panache" 
                width={161} 
                height={34} 
                priority={true} 
              />
            </li>
            <li>
              <Image 
                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/lp-3.png`}
                alt="Panache" 
                width={146} 
                height={59} 
                priority={true} 
              />
            </li>
            <li>
              <Image 
                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/lp-5.png`}
                alt="Panache" 
                width={183} 
                height={37} 
                priority={true} 
              />
            </li>
          </ul>
        </div>
      </div>
    </section>

    {/* Home Section 5*/}
    <section className="home-sec-5 sc-pd-tp-10 sc-pd-bm-10">
      <div className="container">

        <div className="home-sec-5-top text-center">
          <h3>Vivamus vestibulum laoreet ex, vel mollis tellus tempor eget.</h3>
          <p>Vestibulum ante ipsum primis in faucibus orci dolor set</p>
        </div>

        <div className="home-sec-5-slider">
          <Slider {...settings}>
            <div className="home-sec-5-item">
              <div className="img-elmnt">
                <Image 
                  src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/visa-icon.svg`}
                  alt="Visa" 
                  width={60} 
                  height={60} 
                  priority={true} 
                />
              </div>
              <div className="info-elmnt">
                <h5>Visa Support & Submission</h5>
                <p>Vestibulum aliquam finibus cursus. Praesent congue porttitor nunc vel </p>
              </div>
            </div>
            <div className="home-sec-5-item">
              <div className="img-elmnt">
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/admissions-icon.svg`} 
                  alt="Admissions" 
                  width={61} 
                  height={61} 
                  priority={true} 
                />
              </div>
              <div className="info-elmnt">
                <h5>Admissions Processing</h5>
                <p>Vestibulum aliquam finibus cursus. Praesent congue porttitor nunc vel </p>
              </div>
            </div>
            <div className="home-sec-5-item">
              <div className="img-elmnt">
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/application-icon.svg`} 
                  alt="Application" 
                  width={77} 
                  height={56} 
                  priority={true} 
                />
              </div>
              <div className="info-elmnt">
                <h5>Application Updates</h5>
                <p>Vestibulum aliquam finibus cursus. Praesent congue porttitor nunc vel </p>
              </div>
            </div>

            <div className="home-sec-5-item">
              <div className="img-elmnt">
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/visa-icon.svg`} 
                  alt="Visa" 
                  width={60} 
                  height={60} 
                  priority={true} 
                />
              </div>
              <div className="info-elmnt">
                <h5>Visa Support & Submission</h5>
                <p>Vestibulum aliquam finibus cursus. Praesent congue porttitor nunc vel </p>
              </div>
            </div>
            <div className="home-sec-5-item">
              <div className="img-elmnt">
                <Image 
                  src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/admissions-icon.svg`}
                  alt="Admissions" 
                  width={61} 
                  height={61} 
                  priority={true} 
                />
              </div>
              <div className="info-elmnt">
                <h5>Admissions Processing</h5>
                <p>Vestibulum aliquam finibus cursus. Praesent congue porttitor nunc vel </p>
              </div>
            </div>
            <div className="home-sec-5-item">
              <div className="img-elmnt">
                <Image 
                  src="/assets/images/application-icon.svg" 
                  alt="Application" 
                  width={77} 
                  height={56} 
                  priority={true} 
                />
              </div>
              <div className="info-elmnt">
                <h5>Application Updates</h5>
                <p>Vestibulum aliquam finibus cursus. Praesent congue porttitor nunc vel </p>
              </div>
            </div>
            <div className="home-sec-5-item">
              <div className="img-elmnt">
                <Image 
                  src="/assets/images/admissions-icon.svg" 
                  alt="Admissions" 
                  width={61} 
                  height={61} 
                  priority={true} 
                />
              </div>
              <div className="info-elmnt">
                <h5>Admissions Processing</h5>
                <p>Vestibulum aliquam finibus cursus. Praesent congue porttitor nunc vel </p>
              </div>
            </div>
            <div className="home-sec-5-item">
              <div className="img-elmnt">
                <Image 
                  src="/assets/images/application-icon.svg" 
                  alt="Application" 
                  width={77} 
                  height={56} 
                  priority={true} 
                />
              </div>
              <div className="info-elmnt">
                <h5>Application Updates</h5>
                <p>Vestibulum aliquam finibus cursus. Praesent congue porttitor nunc vel </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>

    {/* Home Students Testimonials*/}
    <section className="home-sec-testimonials sc-pd-tp-10 sc-pd-bm-10">
      <div className="container">

        <div className="home-sec-testimonials-top text-center">
          <h3>Students Testimonials</h3>
          <p>Ante ipsum primis in faucibus orci dolor set</p>
        </div>

        <div className="home-sec-testimonials-slider">
          <Slider {...testimonials}>
            <div className="home-testimonials-item">
              <div className="info-elmnt">
                <h5>In hac habitasse platea</h5>
                <p>Vestibulum. Praesent congue porttitor nunc . Praesent congue porttitor nunc vel pulvinar. Cras congue congue. Vestibulum aliquam finibus cursus</p>
              </div>
              <div className="img-elmnt">
                <figure>
                  <Image 
                    src="/assets/images/testi-1.jpg" 
                    alt="Visa" 
                    width={55} 
                    height={55} 
                    priority={true} 
                  />
                </figure>
                <p>John Doe</p>
              </div>
            </div>
            <div className="home-testimonials-item">
              <div className="info-elmnt">
                <h5>Nam hendrerit ex sed ipsum</h5>
                <p>Vestibulum. Praesent congue porttitor nunc . Praesent congue porttitor nunc vel pulvinar. Cras congue congue. Vestibulum aliquam finibus cursus</p>
              </div>
              <div className="img-elmnt">
                <figure>
                  <Image 
                    src="/assets/images/testi-2.jpg" 
                    alt="Visa" 
                    width={55} 
                    height={55} 
                    priority={true} 
                  />
                </figure>
                <p>James Patty</p>
              </div>
            </div>
            <div className="home-testimonials-item">
              <div className="info-elmnt">
                <h5>Cras vitae gravida erat</h5>
                <p>Vestibulum. Praesent congue porttitor nunc . Praesent congue porttitor nunc vel pulvinar. Cras congue congue. Vestibulum aliquam finibus cursus</p>
              </div>
              <div className="img-elmnt">
                <figure>
                  <Image 
                    src="/assets/images/testi-3.jpg" 
                    alt="Visa" 
                    width={55} 
                    height={55} 
                    priority={true} 
                  />
                </figure>
                <p>Fillips Luke</p>
              </div>
            </div>
            <div className="home-testimonials-item">
              <div className="info-elmnt">
                <h5>In hac habitasse platea</h5>
                <p>Vestibulum. Praesent congue porttitor nunc . Praesent congue porttitor nunc vel pulvinar. Cras congue congue. Vestibulum aliquam finibus cursus</p>
              </div>
              <div className="img-elmnt">
                <figure>
                  <Image 
                    src="/assets/images/testi-1.jpg" 
                    alt="Visa" 
                    width={55} 
                    height={55} 
                    priority={true} 
                  />
                </figure>
                <p>John Doe</p>
              </div>
            </div>
            <div className="home-testimonials-item">
              <div className="info-elmnt">
                <h5>Nam hendrerit ex sed ipsum</h5>
                <p>Vestibulum. Praesent congue porttitor nunc . Praesent congue porttitor nunc vel pulvinar. Cras congue congue. Vestibulum aliquam finibus cursus</p>
              </div>
              <div className="img-elmnt">
                <figure>
                  <Image 
                    src="/assets/images/testi-2.jpg" 
                    alt="Visa" 
                    width={55} 
                    height={55} 
                    priority={true} 
                  />
                </figure>
                <p>James Patty</p>
              </div>
            </div>
            <div className="home-testimonials-item">
              <div className="info-elmnt">
                <h5>Cras vitae gravida erat</h5>
                <p>Vestibulum. Praesent congue porttitor nunc . Praesent congue porttitor nunc vel pulvinar. Cras congue congue. Vestibulum aliquam finibus cursus</p>
              </div>
              <div className="img-elmnt">
                <figure>
                  <Image 
                    src="/assets/images/testi-3.jpg" 
                    alt="Visa" 
                    width={55} 
                    height={55} 
                    priority={true} 
                  />
                </figure>
                <p>Fillips Luke</p>
              </div>
            </div>
            <div className="home-testimonials-item">
              <div className="info-elmnt">
                <h5>In hac habitasse platea</h5>
                <p>Vestibulum. Praesent congue porttitor nunc . Praesent congue porttitor nunc vel pulvinar. Cras congue congue. Vestibulum aliquam finibus cursus</p>
              </div>
              <div className="img-elmnt">
                <figure>
                  <Image 
                    src="/assets/images/testi-1.jpg" 
                    alt="Visa" 
                    width={55} 
                    height={55} 
                    priority={true} 
                  />
                </figure>
                <p>John Doe</p>
              </div>
            </div>
            <div className="home-testimonials-item">
              <div className="info-elmnt">
                <h5>Nam hendrerit ex sed ipsum</h5>
                <p>Vestibulum. Praesent congue porttitor nunc . Praesent congue porttitor nunc vel pulvinar. Cras congue congue. Vestibulum aliquam finibus cursus</p>
              </div>
              <div className="img-elmnt">
                <figure>
                  <Image 
                    src="/assets/images/testi-2.jpg" 
                    alt="Visa" 
                    width={55} 
                    height={55} 
                    priority={true} 
                  />
                </figure>
                <p>James Patty</p>
              </div>
            </div>
            <div className="home-testimonials-item">
              <div className="info-elmnt">
                <h5>Cras vitae gravida erat</h5>
                <p>Vestibulum. Praesent congue porttitor nunc . Praesent congue porttitor nunc vel pulvinar. Cras congue congue. Vestibulum aliquam finibus cursus</p>
              </div>
              <div className="img-elmnt">
                <figure>
                  <Image 
                    src="/assets/images/testi-3.jpg" 
                    alt="Visa" 
                    width={55} 
                    height={55} 
                    priority={true} 
                  />
                </figure>
                <p>Fillips Luke</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>


    {/* Home Stay Connected*/}
    <section className="home-sec-connected sc-pd-tp-8 sc-pd-bm-8">
      <div className="container">


        <h3 className="text-center">Stay Connected With Us</h3>

        <div className="home-sec-connected-slider slider-arrows">
          <Slider {...connected}>
            <div className="home-connected-item facebook">
              <div className="img-elmnt">
                <figure>
                  <Image 
                    src="/assets/images/stay-1.jpg" 
                    alt="Visa" 
                    width={234} 
                    height={240} 
                    priority={true} 
                  />
                </figure>
              </div>
              <div className="info-elmnt">
                <div className="info-elmnt-so"><i className="fa-brands fa-facebook-f"></i></div>
                <div className="info-elmnt-con">
                  <p>Abroadunnetwork</p>
                  <Link href="#" className="link">
                    Follow
                  </Link>
                </div>
              </div>
            </div>
            <div className="home-connected-item instagram">
              <div className="img-elmnt">
                <figure>
                  <Image 
                    src="/assets/images/stay-2.jpg" 
                    alt="Visa" 
                    width={234} 
                    height={240} 
                    priority={true} 
                  />
                </figure>
              </div>
              <div className="info-elmnt">
                <div className="info-elmnt-so"><i className="fa-brands fa-instagram"></i></div>
                <div className="info-elmnt-con">
                  <p>Abroadunnetwork</p>
                  <Link href="#" className="link">
                    Follow
                  </Link>
                </div>
              </div>
            </div>
            <div className="home-connected-item facebook">
              <div className="img-elmnt">
                <figure>
                  <Image 
                    src="/assets/images/stay-3.jpg" 
                    alt="Visa" 
                    width={234} 
                    height={240} 
                    priority={true} 
                  />
                </figure>
              </div>
              <div className="info-elmnt">
                <div className="info-elmnt-so"><i className="fa-brands fa-facebook-f"></i></div>
                <div className="info-elmnt-con">
                  <p>Abroadunnetwork</p>
                  <Link href="#" className="link">
                    Follow
                  </Link>
                </div>
              </div>
            </div>
            <div className="home-connected-item youtube">
              <div className="img-elmnt">
                <figure>
                  <Image 
                    src="/assets/images/stay-4.jpg" 
                    alt="Visa" 
                    width={234} 
                    height={240} 
                    priority={true} 
                  />
                </figure>
              </div>
              <div className="info-elmnt">
                <div className="info-elmnt-so"><i className="fa-brands fa-youtube"></i></div>
                <div className="info-elmnt-con">
                  <p>Abroadunnetwork</p>
                  <Link href="#" className="link">
                    Subscribe
                  </Link>
                </div>
              </div>
            </div>
            <div className="home-connected-item instagram">
              <div className="img-elmnt">
                <figure>
                  <Image 
                    src="/assets/images/stay-2.jpg" 
                    alt="Visa" 
                    width={234} 
                    height={240} 
                    priority={true} 
                  />
                </figure>
              </div>
              <div className="info-elmnt">
                <div className="info-elmnt-so"><i className="fa-brands fa-instagram"></i></div>
                <div className="info-elmnt-con">
                  <p>Abroadunnetwork</p>
                  <Link href="#" className="link">
                    Follow
                  </Link>
                </div>
              </div>
            </div>
            <div className="home-connected-item facebook">
              <div className="img-elmnt">
                <figure>
                  <Image 
                    src="/assets/images/stay-3.jpg" 
                    alt="Visa" 
                    width={234} 
                    height={240} 
                    priority={true} 
                  />
                </figure>
              </div>
              <div className="info-elmnt">
                <div className="info-elmnt-so"><i className="fa-brands fa-facebook-f"></i></div>
                <div className="info-elmnt-con">
                  <p>Abroadunnetwork</p>
                  <Link href="#" className="link">
                    Follow
                  </Link>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  </>;
}