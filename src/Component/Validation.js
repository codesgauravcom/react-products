import React, { Component } from 'react';
import ReactFormInputValidation from "react-form-input-validation";
 

export class Validation extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fields: {
            name: "",
            email: "",
            phone_number: ""
          },
          errors: {}
        };
        this.form = new ReactFormInputValidation(this);
        this.form.useRules({
            name: "required",
            email: "required|email",
            phone_number: "required|numeric|digits_between:10,12",
        });
        this.form.onformsubmit = (fields) => {
          // Do you ajax calls here.
        }
      }
    render() {
        return (
            <div>

      <h1>Contact Page Validation</h1>

      <form onSubmit={this.form.handleSubmit}>
            <p>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.name}
                />
              </label>
              <label className="error">
                {this.state.errors.name ? this.state.errors.name : ""}
              </label>
            </p>
 
            <p>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.email}
                />
              </label>
              <label className="error">
                {this.state.errors.email ? this.state.errors.email : ""}
              </label>
            </p>
 
            <p>
              <label>
            Phone
                <input
                  type="tel"
                  name="phone_number"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.phone_number}
                />
              </label>
              <label className="error">
                {this.state.errors.phone_number ? this.state.errors.phone_number : ""}
              </label>
            </p>
            <p>
              <button type="submit">Submit</button>
            </p>
        </form>

                
            </div>
        )
    }
}

export default Validation
