import React from 'react';
import {Link} from 'react-router-dom';


export default function banner() {
  return (
    <div>
      <section class="banner">
        <div class="container">
            <div class="row text-white">
                {/* Banner title */}
                <div class="col-lg-6 col-sm-12 col-md-12 col-12 col-xl-5 col-xxl-5">
                    <div class="banner-title">
                        <h2>American Food</h2>
                        <h3>The Best Taste Food</h3><hr></hr>
                        <p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
                        {/* Banner button */}
                        <div class="order-btn ">
                            <div class="order-now">
                            <Link> <span>Order Now</span>
                                <i class="fa-solid fa-arrow-left"></i></Link>
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
