import React from 'react';
import blog1 from '../assets/images/blog-image1.jpg';
import blog2 from '../assets/images/blog-image-2.jpg';
import {Link} from 'react-router-dom';


export default function blog() {
  return (
    <div>
      <section class="blog">
            <div class="container">
                <div class="row text-center">
                    {/* Blog page title */}
                    <div class="col-lg-12 col-sm-12 col-md-12 col-12 col-xl-12 col-xxl-12">
                        <div class="service-title">
                            <h2 className='mb-4'>Blog</h2>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center">
                    {/* blog box 1 */}
                    <div class="col-lg-4 col-sm-4 col-md-4 col-12 col-xl-4 col-xxl-4">
                        <div class="blog-box">
                            {/* blog box image */}
                            <img src={blog1} alt=""/>
                            {/* blog box hover content */}
                            <div class="blog-box-content">
                                <h3>Eat food. Not too much mostly plants.</h3>
                                <p>Lorem Ipsum available, but the majority have suffered alteration some form, by injected humour randomised words.</p>
                                {/* Read more button */}
                                <div class="service-btn">
                                    <Link to="blogPage">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* blog box 2 */}
                    <div class="col-lg-4 col-sm-4 col-md-4 col-12 col-xl-4 col-xxl-4">
                        <div class="blog-box">
                            {/* blog box image */}
                            <img src={blog1} alt=""/>
                            {/* blog box hover content */}
                            <div class="blog-box-content">
                                <h3>Eat food. Not too much mostly plants.</h3>
                                <p>Lorem Ipsum available, but the majority have suffered alteration some form, by injected humour randomised words.</p>
                                {/* Read more button */}
                                <div class="service-btn">
                                    <Link to="blogPage">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* blog box 3 */}
                    <div class="col-lg-4 col-sm-4 col-md-4 col-12 col-xl-4 col-xxl-4">
                        <div class="blog-box">
                            {/* blog box image */}
                            <img src={blog2} alt=""/>
                            <div class="blog-box-content">
                            {/* blog box hover content */}
                                <h3>Eat food. Not too much mostly plants.</h3>
                                <p>Lorem Ipsum available, but the majority have suffered alteration some form, by injected humour randomised words.</p>
                                {/* Read more button */}
                                <div class="service-btn">
                                    <Link to="blogPage">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    </div>
  )
}
