import React, { Component } from "react";
import axios from "axios";


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            handleErrors: ""
        };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }
handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    });
}
handleSubmit(event) {
    const { email, password } = this.state;

  axios
  .post(
      "https://localhost:3001/api/users",
      {
          user:{
              email: email,
              password: password
          }
      },
      { withCredentials: true }
  )
  .then(response => {
      console.log("logged in", response);
  })
  .catch(error => {
      console.log("handle error", error);
  });
  event.preventDefault();
}
render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input
                type="email"
                name="email"
                placeholder="Username"
                value={this.state.email}
                onChange={this.handleChange}
                required
                />
                <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
                required
                />
                <button type="submit">Login</button>

            </form>
        </div>
    )
}
}
export default Login;