import React from 'react';

import Service from './service';
import AboutUs from './aboutUs';
import SpecialOffer1 from './specialOffer1';
import SpecialOffer2 from './specialOffer2';
import Pricing from './pricing';
import Blog from './blog';
import Banner from './banner';


export default function index() {
  return (
    <div>
      <Banner/>
        <AboutUs/>
        <Service/>
        <SpecialOffer1/>
        <Pricing/>
        <SpecialOffer2/>
        <Blog/>
    </div>
  )
}
