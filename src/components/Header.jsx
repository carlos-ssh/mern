import React from 'react';


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <h1>urProducts</h1>
      </div>
      <a
        href="/products/new"
        className="btn btn-outline-light"
      >
        Add Product &#43;
      </a>
    </nav>
  );
}

export default Header;