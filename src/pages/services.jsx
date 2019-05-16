import React, { Component } from 'react';

import Servicesbox from './servicebox';

class Services extends Component {
    state = {  }
    render() { 
        return ( 
          <section id="services">
          <div className="container">
          <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div className="row text-center">
          <Servicesbox title="Title name 1" dis="discription of title 1. discription of title 1. discription of title 1"/>
          <Servicesbox title="Title name 2" dis="discription of title 2. discription of title 1. discription of title 2"/>
          <Servicesbox title="Title name 3" dis="discription of title 3. discription of title 1. discription of title 3"/>
        </div>

        </div>
        </section>
        

         );
    }
}
 
export default Services;