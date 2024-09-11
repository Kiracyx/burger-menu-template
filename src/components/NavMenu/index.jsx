import React from "react";

const NavMenu = (props) => {
  const { links } = props;

  const arrayJSX = links.map((text) => {
    return <a href="#">{text}</a>;
  });
  return <div>{arrayJSX}</div>;
};

export default NavMenu;
