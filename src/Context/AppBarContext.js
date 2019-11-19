import React, { Component } from "react";

const AppBarContext = React.createContext();

class AppBarProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
      homeBar: true
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    console.log(window.location);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  handleCurrentLocation = currentLoc => {
    if (currentLoc == "/") {
      this.setState({
        homeBar: true
      });
    } else {
      this.setState({
        homeBar: false
      });
    }
  };

  handleBack = () => {
    console.log(this.props);
  };
  render() {
    return (
      <>
        <AppBarContext.Provider
          value={{
            ...this.state,
            handleScroll: this.handleScroll,
            handleCurrentLocation: this.handleCurrentLocation,
            handleBack: this.handleBack
          }}
        >
          {this.props.children}
        </AppBarContext.Provider>
      </>
    );
  }
}
const AppBarConsumer = AppBarContext.Consumer;

export { AppBarConsumer, AppBarProvider, AppBarContext };
