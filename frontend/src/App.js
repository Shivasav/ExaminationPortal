// import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login/Login";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ProtectedRoute from "./Context/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <ProtectedRoute path="/home" component={Home} />
      </Switch>
      {/* <Login /> */}
    </div>
  );
}

export default App;
