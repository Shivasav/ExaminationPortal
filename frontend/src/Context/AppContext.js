import React from "react";

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
            if (authObj.username === "admin" && authObj.password === "admin") {
              this.setState({ isAuthenticated: true }, () => {
                callback(true);
              });
            } else {
              alert("Invalid credentials!");
            }
          },
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}

export const AppConsumer = AppContext.Consumer;
