import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <h1>
          <Link to={'/'} className="text-light">
            urProducts
          </Link>
        </h1>
      </div>
      <Link to={"/products/new"} className="btn btn-primary">
        Add Product &#43;
      </Link>
    </nav>
  );
}

export default Header;