import React from 'react';

import Service from '../components/service';
import AboutUs from '../components/aboutUs';
import SpecialOffer1 from '../components/specialOffer1';
import SpecialOffer2 from '../components/specialOffer2';
import Pricing from '../components/pricing';
import Blog from '../components/blog';
import Banner from '../components/banner';


export default function home() {
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
