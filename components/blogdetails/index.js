import React from "react";
import Image from "next/image";
import Link from "next/link";


const Blogdetails = (props) => {
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

            <section className="blog-sec-inner sc-pd-tp-5 sc-pd-bm-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="blog-single-main">
                                <figure className="blog-sec-img">
                                    <div className="date-p">August 3, 2023</div>
                                    <Image src="/assets/images/blog-details.jpg" alt="Panache" width={725} height={403} priority={true} />
                                </figure>
                                <div className="blog-sec-con">
                                    <h5>Vestibulum aliquam finibus cursus.</h5>
                                    <p>Nullam ut vestibulum ex. Nullam porta lorem non odio vehicula ultricies vel ornare odio. Quisque imperdiet tincidunt orci nec efficitur. Integer eu tincidunt neque. Aliquam ut lectus ut neque porttitor bibendum. Suspendisse rutrum nunc sed mauris cursus, et commodo orci pretium. Morbi sollicitudin ullamcorper orci. Integer maximus quis est eget tempus. Nam viverra turpis est, eget venenatis augue consectetur vel. Integer volutpat condimentum porta. Vestibulum sapien eros, rhoncus vitae fermentum vel, gravida in quam. Cras quis orci leo. Morbi venenatis dui eget rhoncus tempus.</p>

                                    <p>Sed aliquam tristique nunc in volutpat. Suspendisse non magna eu sapien efficitur rhoncus. Vestibulum pellentesque faucibus nulla, vitae tincidunt tortor vulputate ac. Phasellus blandit luctus risus, eu fringilla dui gravida sed. Sed feugiat, dolor eget iaculis sollicitudin, neque sapien iaculis ipsum, ut tincidunt nulla arcu nec erat. Nullam molestie condimentum semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis pellentesque facilisis mi vel eleifend. Maecenas venenatis odio at faucibus accumsan. Duis quis nisi quis diam mattis venenatis at vitae risus.</p>
                                </div>
                            </div>
                            <div className="blog-pagination">
                                <Link href="/" className="prev"><span>Prev Prost</span></Link>
                                <Link href="/" className="next"><span>Next Post</span></Link>
                            </div>
                            <div className="blog-reply">
                                <h5>Leave a Reply</h5>
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="inputtext">Name *</label>
                                                <input type="text" className="form-control" id="inputtext" aria-describedby="inputtext" placeholder="Enter Name" />
                                                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="inputQualification">Email *</label>
                                                <input type="email" className="form-control" id="inputQualification" aria-describedby="inputQualification" placeholder="Enter Email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputArea">Comment</label>
                                        <input type="textarea" className="form-control" id="inputArea" aria-describedby="inputArea" placeholder="Enter Comment" />
                                    </div>
                                    <button type="submit" className="btn btn-blue">Post Comment</button>
                                </form>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="top-search">
                                <form className="top-search-form">
                                    <input type="text" className="form-control" id="inputtext" aria-describedby="inputtext" placeholder="Search" />
                                    <button type="submit" className="btn-search"></button>
                                </form>
                            </div>
                            <div className="blog-latest-post">
                                <h4>Latest Post</h4>
                                <div className="blog-single-small">
                                    <figure className="blog-sec-img">
                                        <Link href="/blogdetails"> <Image src="/assets/images/blog-sm-1.jpg" alt="Panache" width={120} height={115} priority={true} /></Link>
                                    </figure>
                                    <div className="blog-sec-con">
                                        <h5><Link href="/blogdetails">Suspendisse rutrum nunc sed mauris cur</Link></h5>
                                    </div>
                                </div>
                                <div className="blog-single-small">
                                    <figure className="blog-sec-img">
                                        <Link href="/blogdetails"> <Image src="/assets/images/blog-sm-2.jpg" alt="Panache" width={120} height={115} priority={true} /></Link>
                                    </figure>
                                    <div className="blog-sec-con">
                                        <h5><Link href="/blogdetails">Commodo orci pre tiurbi sollicitudin ullam</Link></h5>
                                    </div>
                                </div>
                                <div className="blog-single-small">
                                    <figure className="blog-sec-img">
                                        <Link href="/blogdetails"> <Image src="/assets/images/blog-sm-3.jpg" alt="Panache" width={120} height={115} priority={true} /></Link>
                                    </figure>
                                    <div className="blog-sec-con">
                                        <h5><Link href="/blogdetails">Et commodo orci pret orbi sollic itudin u</Link></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Blogdetails;