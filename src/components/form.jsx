import React, { Component } from 'react';

class Form extends Component {
    state = {  }
    render() { 
        return (  
            <div className="container">
                <div className="col-md-10">
                <h4>Regestration Form</h4>
                    <div className="form-group">
                        <label className="control-label">Enter your full name :</label>
                        <input input="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Enter your age :</label>
                        <input input="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Gender :</label>   
                        <div>                 
                            <input type="radio" className="form-radio" id="first"/>
                            <label className="form-check-lable" id="first">
                                Male
                            </label>
                        </div>
                        <div>                 
                            <input type="radio" className="form-radio" id="first"/>
                            <label className="form-check-lable" id="first">
                                Female
                            </label>
                        </div>                        
                    </div>
                    <div classname="form-group">
                        <label className="control-label">Intrested in:</label>
                        <select className="form-control">
                            <option value="0">Java</option>
                            <option value="1">.Net</option>
                            <option value="2">React</option>
                            <option value="3">Javascript</option>
                        </select>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label>Enter your street address and AVE :</label>
                            <input input="text" className="form-control" />
                        </div>
                        <div className="col">
                            <label>Enter your city and state :</label>
                            <input input="text" className="form-control" />
                        </div>
                        <div className="col">
                            <label>Enter your zipcode :</label>
                            <input input="text" className="form-control" />
                        </div>                   
                    </div>

                    <div className="form-group">
                        <br/> 
                        <button className="btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Form;