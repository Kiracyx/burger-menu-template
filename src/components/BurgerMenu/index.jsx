import React, { Component } from "react";
import NavMenu from "../NavMenu";

class BurgerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
      navItems: ["Home", "Documents", "Partners", "Feedback"],
    };

    this.toggleShown = () => {
      this.setState((prevState) => {
        return {
          isShown: !prevState.isShown,
        };
      });
    };
  }
  render() {
    const styleDisplay = this.state.isShown ? "block" : "none";
    const navItems = this.state.navItems;

    return (
      <div>
        <div onClick={this.toggleShown}>On/Off</div>
        <div style={{ display: styleDisplay }}>
          <NavMenu links={navItems} />
        </div>
      </div>
    );
  }
}

export default BurgerMenu;
