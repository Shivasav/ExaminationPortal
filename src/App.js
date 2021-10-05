import logo from "./logo.svg";
import "./App.css";
import { Button, TextField } from "@mui/material";

function App() {
  return (
    <div className="App">
      {/* <div>
          <form>
            <span>Username: </span>
            <input
              type="text"
              name="Username"
              placeholder="your username..."
              required
            />
            <br></br>
            <span>Password: </span>
            <input type="password" name="pass" required />
            <br></br>
            <Button variant="contained" size="medium">
              Login{" "}
            </Button>
          </form>
        </div> */}
      <TextField
        id="outlined-name"
        label="Username"
        value={""}
        // onChange={handleChange}
      />
      <TextField
        id="outlined-name"
        type ="password"
        label="Password"
        value={""}
        // onChange={handleChange}
      />
      <div>
        <a href="https://www.facebook.com/shivasav.bhasin/">Facebook</a>
        <br></br>
        <a href="https://twitter.com/shivasavbhasin">Twitter</a>
        <p>© 2021 SG Solutions</p>
      </div>
    </div>
  );
}

export default App;
