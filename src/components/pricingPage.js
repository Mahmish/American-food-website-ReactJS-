import React from 'react';
import {Link} from 'react-router-dom';

export default function pricing() {
  return (
    <div>
      <section class="pricing">
              <div class="container">
                  <div class="row text-center">
                <div class="col-lg-12 col-sm-12 col-md-12 col-12 col-xl-12 col-xxl-12">
                    <div class="service-title">
                        <h2>Pricing Detail</h2>
                    </div>
                </div>
            </div>
            <div class="row text-white text-center">
                            {/* pring section box 1  */}
                            <div class="col-lg-4 col-sm-4 col-md-4 col-12 col-xl-4 col-xxl-4">
                                <div class="pricing-box pt-5">
                                    <div class="pricing-type">
                                        <h3>Basic</h3>
                                        <span>$35</span>
                                    </div>
                                    <div class="type-details">
                                        <p>6 Pis Chicken</p>
                                        <p>3 Pis Beef Chicken</p>
                                        <p>2 Pis Burger</p>
                                        <div class="service-btn">
                                            <Link to="pricingPage">BUY NOW</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* pring section box 2 */}
                            <div class="col-lg-4 col-sm-4 col-md-4 col-12 col-xl-4 col-xxl-4">
                                <div class="pricing-box pt-5">
                                    <div class="pricing-type">
                                        <h3>Standard</h3>
                                        <span>$50</span>
                                    </div>
                                    <div class="type-details">
                                        <p>6 Pis Chicken</p>
                                        <p>3 Pis Beef Chicken</p>
                                        <p>2 Pis Burger</p>
                                        <div class="service-btn">
                                            <Link to="pricingPage">BUY NOW</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* pring section box 3  */}
                            <div class="col-lg-4 col-sm-4 col-md-4 col-12 col-xl-4 col-xxl-4">
                                <div class="pricing-box pt-5">
                                    <div class="pricing-type">
                                        <h3>Premium</h3>
                                        <span>$45</span>
                                    </div>
                                    <div class="type-details">
                                        <p>6 Pis Chicken</p>
                                        <p>3 Pis Beef Chicken</p>
                                        <p>2 Pis Burger</p>
                                        <div class="service-btn">
                                            <Link to="pricingPage">BUY NOW</Link>
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
