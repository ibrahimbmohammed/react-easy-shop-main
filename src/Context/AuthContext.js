import React, { Component } from "react";
import jwtDecode from "jwt-decode";
const AuthContext = React.createContext();

class AuthProvider extends Component {
  state = {
    authenticated: false
  };
  componentDidMount() {
    this.handleAuth();
  }

  handleAuth = () => {
    const token = localStorage.FBIdoken;
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        this.setState({
          authenticated: false
        });

        window.location.href = "/signIn";
      } else {
        this.setState({
          authenticated: true
        });
      }
    }
  };

  render() {
    return (
      <>
        <AuthContext.Provider value={{ ...this.state }}>
          {this.props.children}
        </AuthContext.Provider>
      </>
    );
  }
}
const AuthConsumer = AuthContext.Consumer;

export { AuthConsumer, AuthProvider, AuthContext };
