import React from "react";

const Header = ({ title, image, children }) => {
  return (
    <header>
      <div className="header">
        <div className="header_container">
          <div className="header_container-bg">
            <img src={image} alt="header-bg" />
          </div>
          <div className="header_content">
            <h2>{title}</h2>
            <p>{children}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
