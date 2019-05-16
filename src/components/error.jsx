import React, { Component } from 'react';

class Error extends Component {
    state = {  }
    render() { 
        return ( 
            <h1 class="text-danger">
                <strong>404, </strong>Page Not Found!
            </h1>
         );
    }
}
 
export default Error;