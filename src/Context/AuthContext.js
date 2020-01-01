import React, { Component } from "react";
import jwtDecode from "jwt-decode";
const AuthContext = React.createContext();
//import {Redirect} from "react-router-dom"

class AuthProvider extends Component {
  state = {
    authenticated: false
  };
  componentDidMount() {
    this.handleAuth();
  }

  handleAuth = () => {
    const token = localStorage.FBIdtoken;
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        this.setState({
          authenticated: false
        });
        localStorage.clear();
        window.location.href = "/signIn";
      } else {
        this.setState({
          authenticated: true
        });
      }
    }
  };
handleLogout=()=>{
  localStorage.clear();
  window.location.href = "/signIn";
}
  render() {
    return (
      <>
        <AuthContext.Provider
          value={{ ...this.state, handleAuth: this.handleAuth, handleLogout:this.handleLogout}}
        >
          {this.props.children}
        </AuthContext.Provider>
      </>
    );
  }
}
const AuthConsumer = AuthContext.Consumer;

export { AuthConsumer, AuthProvider, AuthContext };

//if (Date.now() >= exp * 1000) {
// return false;
//}
