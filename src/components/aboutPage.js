import React from 'react';
import youtube from'../assets/images/youtube-btn.png';
import {Link} from 'react-router-dom';

export default function aboutUs() {
  return (
    <div>
      <section class="about-us">
        <div class="container">
            <div class="row text-center">
                {/* aboutUs page title */}
                <div class="col-lg-12 col-sm-12 col-md-12 col-12 col-xl-12 col-xxl-12">
                    <div class="about-title">
                        <h2>About Us</h2>
                    </div>
                </div>
            </div>
            <div class="about-row">
               <div class="row">
                {/* aboutUs page content*/}
                <div class="col-lg-6 col-sm-12 col-md-12 col-12 col-xl-6 col-xxl-6">
                    <div class="about-content">
                        <h3>Let food be thy medicine medicine be thy food.</h3>
                        <p>Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour randomise words which don't look even slightly believable. If you are going to use a passage <br/><br/>Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        <div class="order-btn">
                            <div class="order-btn">
                                <div class="order-now">
                                    <Link> <span>Order Now</span>
                                    <i class="fa-solid fa-arrow-left"></i></Link>
                                </div>
                            </div>
                    </div>
                </div>
                </div>
                
                          
                {/* aboutUs page image*/}
                <div class="col-lg-6 col-sm-12 col-md-12 col-12 col-xl-6 col-xxl-6">
                    <div class="aboutImage">
                        <div class="youtubeUs-img">
                            <img src={youtube} alt=""/>
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
