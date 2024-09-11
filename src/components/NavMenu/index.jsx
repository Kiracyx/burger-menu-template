import React from "react";
import PropTypes from "prop-types";

const NavMenu = (props) => {
  const { links } = props;

  if (links && links.length > 0) {
    const arrayJSX = links.map((elem) => {
      const { text, href, id } = elem;
      return (
        <a href={href} key={id}>
          {text}
        </a>
      );
    });
    return (
      <nav>
        <ul>
          <li>{arrayJSX}</li>
        </ul>
      </nav>
    );
  }
  return <div>No links</div>;
};

NavMenu.propTypes = {
  links: PropTypes.array.isRequired,
};

export default NavMenu;
