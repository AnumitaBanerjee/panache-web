import React from "react";
import Image from "next/image";
import Link from "next/link";


const Blog = (props) => {
    return (
        <>
            <section className="banner banner-inner">
                <div className="cover">
                    <div className="container">
                        <div className="banner-content">
                            <h1>Blog</h1>
                            <p>Donec ac nulla dapibus metus consequat efficitur.</p>
                        </div>
                    </div>
                </div>
                <Image src="/assets/images/banner-blog.jpg" alt="Panache" width={1900} height={484} priority={true} />
            </section>

            <section className="blog-sec sc-pd-tp-5 sc-pd-bm-5">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6">
                            <div className="blog-sec-in">
                                <figure className="blog-sec-img">
                                    <div className="date-p">August 3, 2023</div>
                                    <Image src="/assets/images/blog-1.jpg" alt="Panache" width={529} height={330} priority={true} />
                                </figure>
                                <div className="blog-sec-con">
                                    <h5>Vestibulum aliquam finibus cursus.</h5>
                                    <p>Vestibulum aliquam finibus cursus. Praesent congue porttitor nunc vel pulvinar. Cras congue congue. Vestibulum aliquam finibus cursus. Praesent congue porttitor nunc vel pulvinar. Cras congue congue.</p>
                                    <Link href="/blogdetails" className="btn btn-blue"><span>Read More</span></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="blog-sec-in">
                                <figure className="blog-sec-img">
                                    <div className="date-p">August 1, 2023</div>
                                    <Image src="/assets/images/blog-2.jpg" alt="Panache" width={529} height={330} priority={true} />
                                </figure>
                                <div className="blog-sec-con">
                                    <h5>Suspendisse rutrum nunc sed mauris cur</h5>
                                    <p>VNullam ut vestibulum ex. Nullam porta lorem non odio vehicula ultricies vel ornare odio. Quisque imperdiet tincidunt orci nec efficitur. Integer eu tincidunt neque. Aliquam ut</p>
                                    <Link href="/blogdetails" className="btn btn-blue"><span>Read More</span></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="blog-sec-in">
                                <figure className="blog-sec-img">
                                    <div className="date-p">July 23, 2023</div>
                                    <Image src="/assets/images/blog-3.jpg" alt="Panache" width={529} height={330} priority={true} />
                                </figure>
                                <div className="blog-sec-con">
                                    <h5>Morbi sollicitudin ullamcorper orci.</h5>
                                    <p>Vestibulum aliquam finibus cursus. Praesent congue porttitor nunc vel pulvinar. Cras congue congue. Vestibulum aliquam finibus cursus. Praesent congue porttitor nunc vel pulvinar. Cras congue congue.</p>
                                    <Link href="/blogdetails" className="btn btn-blue"><span>Read More</span></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="blog-sec-in">
                                <figure className="blog-sec-img">
                                    <div className="date-p">July 25, 2023</div>
                                    <Image src="/assets/images/blog-4.jpg" alt="Panache" width={529} height={330} priority={true} />
                                </figure>
                                <div className="blog-sec-con">
                                    <h5>Commodo orci pretiurbi sollicitudin ullam</h5>
                                    <p>Vestibulum aliquam finibus cursus. Praesent congue porttitor nunc vel pulvinar. Cras congue congue. Vestibulum aliquam finibus cursus. Praesent congue porttitor nunc vel pulvinar. Cras congue congue.</p>
                                    <Link href="/blogdetails" className="btn btn-blue"><span>Read More</span></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="blog-sec-in">
                                <figure className="blog-sec-img">
                                    <div className="date-p">August 16, 2023</div>
                                    <Image src="/assets/images/blog-5.jpg" alt="Panache" width={529} height={330} priority={true} />
                                </figure>
                                <div className="blog-sec-con">
                                    <h5>Et commodo orci pret orbi sollicitudin.</h5>
                                    <p>Vestibulum aliquam finibus cursus. Praesent congue porttitor nunc vel pulvinar. Cras congue congue. Vestibulum aliquam finibus cursus. Praesent congue porttitor nunc vel pulvinar. Cras congue congue.</p>
                                    <Link href="/blogdetails" className="btn btn-blue"><span>Read More</span></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="blog-sec-in">
                                <figure className="blog-sec-img">
                                    <div className="date-p">August 13, 2023</div>
                                    <Image src="/assets/images/blog-6.jpg" alt="Panache" width={529} height={330} priority={true} />
                                </figure>
                                <div className="blog-sec-con">
                                    <h5>Suspendisse non magna eu sapien effi.</h5>
                                    <p>Vestibulum aliquam finibus cursus. Praesent congue porttitor nunc vel pulvinar. Cras congue congue. Vestibulum aliquam finibus cursus. Praesent congue porttitor nunc vel pulvinar. Cras congue congue.</p>
                                    <Link href="/blogdetails" className="btn btn-blue"><span>Read More</span></Link>
                                </div>
                            </div>
                        </div>

                    </div>

                    <ul className="pagination">
                        <li><Link href="/" className="prev"></Link></li>
                        <li><Link href="/" className="active">1</Link></li>
                        <li><Link href="/">2</Link></li>
                        <li><Link href="/">3</Link></li>
                        <li><Link href="/" className="next"></Link></li>
                    </ul>

                </div>
            </section>
        </>
    )
}

export default Blog;