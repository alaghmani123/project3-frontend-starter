import React, { Component } from 'react';
import axios from 'axios';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            password_confirmation:"",
            registrationErrors:""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log("handle change", event);
    }
    handleSubmit(event) {
        const{
            email,
            password,
            password_confirmation
        } = this.state;

        axios.post("http://localhost:3000/registration", {
            user: {
                email: email,
                password: password,
                password_confirmation: password_confirmation
            }
        },
        { withCredentials:true }
        )
        .then(response => {
            console.log("registration res", response);
        }) 
        .catch(error => {
            console.log("registration error", error);
        });
        event.preventDefault();
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type="email" 
            name="email" 
            placeholder="Email" 
            value={this.state.email} 
            onChange={this.handleChange} 
            required 
            />
            <input type="password" 
            name="password" 
            placeholder="Password" 
            value={this.state.password} 
            onChange={this.handleChange} 
            required 
            />
            <input type="password" 
            name="password_confirmation" 
            placeholder="Confirm Password" 
            value={this.state.password_confirmation} 
            onChange={this.handleChange} 
            required 
            />
            <button className="regSubmit" type="submit">Register Now!</button>
        </form>
    </div>
    );
  }
}
export default Registration;