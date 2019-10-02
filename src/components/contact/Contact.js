import React, { Component } from "react";
import "./_contact.scss";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    
    // TODO determine what to do here
  }

  render() {
    if (this.props.activeComponent === "Contact") {
      return <section className='contact'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input 
              name="name"
              type="text" 
              value={this.state.name} 
              onChange={this.handleChange} />
          </label>

          <label>
            Email:
            <input 
              name="email"
              type="text" 
              value={this.state.email} 
              onChange={this.handleChange} />
          </label>

          <label>
            Message:
            <textarea 
              name="message"
              type="text" 
              value={this.state.message} 
              onChange={this.handleChange} />
          </label>

          <input type="submit" value="Submit" />
        </form>
      </section>;
    } else {
      return null;
    }
  }
}
