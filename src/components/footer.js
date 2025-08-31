import React from 'react';
import logo from '../assets/images/logo.png';
import triangle from '../assets/images/triangle.png';
import {Link} from 'react-router-dom';

export default function footer() {
  return (
    <div>
      <section class="footer">
        <div class="container">
            <div class="row text-center text-white">
                <div class="col-lg-12 col-sm-12 col-md-12 col-12 col-xl-12 col-xxl-12">
                    {/* background image  */}
                    <div class="triangle">
                        <img src={triangle} alt=""/>
                    </div>
                    {/* footer content  */}
                    <div class="footer-content">
                        <img src={logo} alt=""/>
                        <h3>American Food</h3>
                        <h4>The Best Taste Food</h4>
                        <div class="social-icons ">
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-whatsapp"></i>
                        </div>
                        <Link>yourwebsite.com</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
