import React, { Component } from 'react';

class Servicesbox extends Component {
    state = {  }
    render() { 
        return ( 

            <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary"></i>
            <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">{this.props.title}</h4>
          <p className="text-muted">{this.props.dis}</p>
        </div>


         );
    }
}
 

   


export default Servicesbox;