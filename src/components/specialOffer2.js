import React from 'react';
import {Link} from 'react-router-dom';

export default function specialOffer2() {
  return (
    <div>
      <section class="special-offer2">
        <div class="container">
            <div class="row">
                <div class="col-lg-6"></div>
                <div class="col-lg-6 col-sm-12 col-md-12 col-12 col-xl-6 col-xxl-6">
                    <div class="offer2-content text-end">
                        <h4>Special</h4>
                        <h2>SALES 50% DISCOUNT</h2>
                        <h3>ALL FOOD PRODUCTS</h3>
                        <p>Lorem Ipsum available, but the majority have suffered some form, by injected humour, or randomised words of Lorem Ipsum, you need to be sure.</p>
                        <div class="offer-btn"><Link>Discount</Link></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
