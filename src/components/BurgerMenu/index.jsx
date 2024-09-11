import React, { Component } from "react";
import PropTypes from "prop-types";

import "./BurgerMenu.sass";

class BurgerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
      burgerMenuLogo: props.burgerLogo,
      burgerCross: props.burgerCross,
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

    const toggleBrgMenuLogo = this.state.isShown
      ? this.state.burgerCross
      : this.state.burgerMenuLogo;

    return (
      <div>
        <img
          className="brg-menu-logo"
          src={toggleBrgMenuLogo}
          alt="Burger menu"
          onClick={this.toggleShown}
        />
        <div style={{ display: styleDisplay }}>{this.props.children}</div>
      </div>
    );
  }
}

BurgerMenu.propTypes = {
  burgerLogo: PropTypes.string.isRequired,
  burgerCross: PropTypes.string.isRequired,
};

export default BurgerMenu;
