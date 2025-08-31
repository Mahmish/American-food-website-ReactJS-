import React from 'react';
import service1 from '../assets/images/service-image-1.jpg';
import service2 from '../assets/images/service-image-2.jpg';
import service3 from '../assets/images/service-image3.jpg';
import {Link} from 'react-router-dom';

export default function service() {
  return (
    <div>
       <section class="service">
        <div class="container">
            <div class="row text-center">
                {/* service section title  */}
                <div class="col-lg-12 col-sm-12 col-md-12 col-12 col-xl-12 col-xxl-12">
                    <div class="service-title">
                        <h2>Service<span>Service</span></h2>
                        <p>Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour</p>
                    </div>
                </div>
            </div>
            <div class="row align-items-center">
                {/* service row 1  */}
                <div class="col-lg-7 pt-5 col-sm-12 col-md-6 col-12 col-xl-7 col-xxl-7">
                    <div class="service-content">
                        <div class="service-heading">
                            <h3>Peanut butter</h3>
                            <span>$45</span>
                        </div>
                        <p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure</p>
                        <div class="service-btn"><Link to='/servicePage'>Buy Now</Link></div>
                    </div>
                </div>
                <div class="col-lg-5 pt-5 col-sm-12 col-md-6 col-12 col-xl-5 col-xxl-5">
                    <div class="service-image text-end">
                        <img src={service1} alt=""/>
                    </div>
                </div>
                {/* service row 2  */}
                
                <div class="col-lg-7 col-sm-12 col-md-6 col-12 col-xl-7 col-xxl-7">
                    <div class="service-content">
                        <div class="service-heading">
                            <h3>Pumpkin pie</h3>
                            <span>$35</span>
                        </div>
                        <p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure</p>
                        <div class="service-btn"><Link to='/servicePage'>Buy Now</Link></div>
                    </div>
                </div>
                <div class="col-lg-5 col-sm-12 col-md-6 col-12 col-xl-5 col-xxl-5">
                    <div class="service-image text-end">
                        <img src={service2} alt=""/>
                    </div>
                </div>
                {/* service row 3  */}
            
                <div class="col-lg-7 col-sm-12 col-md-6 col-12 col-xl-7 col-xxl-7">
                    <div class="service-content">
                        <div class="service-heading">
                            <h3>Jambalaya</h3>
                            <span>$50</span>
                        </div>
                        <p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure</p>
                        <div class="service-btn"><Link to='/servicePage'>Buy Now</Link></div>
                    </div>
                </div>
                <div class="col-lg-5 col-sm-12 col-md-6 col-12 col-xl-5 col-xxl-5">
                    <div class="service-image text-end">
                        <img src={service3} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
