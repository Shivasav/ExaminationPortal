import React from "react";
import axios from "axios";

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  state = {
    isAuthenticated: false,
  };
  render() {
    const { children } = this.props;
    return (
      <AppContext.Provider
        value={{
          isAuthenticated: this.state.isAuthenticated,
          login: (authObj, callback) => {
            axios
              .post("http://localhost:5000/api/login/verifyLogin", authObj)
              .then((resp) => {
                if (resp.data.error) {
                  callback(false);
                } else {
                  this.setState({ isAuthenticated: true }, () => {
                    callback(true);
                  });
                }
              });
          },
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}

export const AppConsumer = AppContext.Consumer;
