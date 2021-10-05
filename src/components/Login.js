import { React, Component } from "react";
import { TextField } from "@mui/material";

class Login extends Component {
  state = {
    userName: "",
    password: "",
  };

  constructor(props) {
    super(props);
    console.log("Constructor called");
  }

  handleChange = (event) => {
    this.setState({ userName: event.target.value });
  };

  render() {
    return (
      <>
        <TextField
          id="outlined-name"
          label="Username"
          value={this.state.userName}
          onChange={this.handleChange}
        />
        <TextField
          id="outlined-password"
          type="password"
          label="Password"
          value={this.state.password}
          // onChange={handleChange}
        />

        <div>
          <a href="https://www.facebook.com/shivasav.bhasin/">Facebook</a>
          <br></br>
          <a href="https://twitter.com/shivasavbhasin">Twitter</a>
          <p>© 2021 SG Solutions</p>
        </div>
      </>
    );
  }
}

export default Login;
