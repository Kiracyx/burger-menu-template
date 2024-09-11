import React, { Component } from "react";
import BurgerMenu from "./components/BurgerMenu";
import NavMenu from "./components/NavMenu";
import burgerLogo from "./assets/images/icons/img5_burger_menu.svg";
import burgerCross from "./assets/images/icons/img7_cross.svg";
import "./App.sass";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 0, text: "Home", href: "#" },
        { id: 1, text: "Documents", href: "#" },
        { id: 2, text: "Partners", href: "#" },
        { id: 3, text: "Feedback", href: "#" },
      ],
    };
  }
  render() {
    const navLinks = this.state.navItems;
    return (
      <div className="App">
        <BurgerMenu burgerLogo={burgerLogo} burgerCross={burgerCross}>
          <NavMenu links={navLinks} />
        </BurgerMenu>
      </div>
    );
  }
}

export default App;
