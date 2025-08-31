import React from 'react'

export default function contact() {
  return (
      <div>
           <section>
        <div class="get-in-touch">
            <div class="container">
                <div class="row text-center">
                    {/* contact title */}
                    <div class="col-lg-12 col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                        <div class="get-in-touch-title">
                            <hr/>
                            <h4>Get in touch</h4>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="contactInfo">
                        {/* contact form */}
                        <div class="col-lg-6 col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                            <div class="contact-form">
                                <form>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                        <label for="name">Name</label>
                                        <input type="text" class="form-control"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                        <label for="phone">Phone</label>
                                        <input type="phone" class="form-control"/>
                                        </div>                            
                                    </div>
                                    <div class="form-group">
                                        <label for="Email">Email</label>
                                        <input type="email" class="form-control"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="message">Write Message</label>
                                        <textarea name="Message" rows="10" cols="12" class="form-control"></textarea>
                                    </div>
                                    <button type="submit" class="form-control">SEND MESSAGE</button>
                                </form>
                            </div>
                        </div>
                        {/* contact details */}
                        <div class="col-lg-6 col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                            <div class="contact-details text-center">
                                <h4>Contact details</h4>
                                 <ul class="info">
                                    <li>1 Street Name, City Name Here</li>
                                    <li>United States</li>
                                    <li><br/>+1 245 365 5482</li>
                                    <li> <br/><br/>info@yourdomain.com</li>
                                 </ul>
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
