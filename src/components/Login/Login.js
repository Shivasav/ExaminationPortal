import { React, Component } from "react";
import { TextField, Grid, Button, Card } from "@mui/material";
import { styles } from "./loginCss.js";

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
    switch (event.target.id) {
      case "outlined-name":
        this.setState({ userName: event.target.value });
        break;
      case "outlined-password":
        this.setState({ password: event.target.value });
        break;
      default:
        this.setState({ userName: "", password: "" });
    }
  };

  render() {
    return (
      <>
        <Grid container spacing={2}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <div
              style={{
                width: 500,
                border: "1px solid grey",
                margin: 10,
                padding: 10,
                boxShadow: "2px 2px grey",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4} style={styles.centeredFields}>
                  <TextField
                    id="outlined-name"
                    label="Username"
                    value={this.state.userName}
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={4}></Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4} style={styles.centeredFields}>
                  <TextField
                    id="outlined-password"
                    type="password"
                    label="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={4}></Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4} style={styles.centeredFields}>
                  <Button variant="contained">Login</Button>
                </Grid>
                <Grid item xs={4}></Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>

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
